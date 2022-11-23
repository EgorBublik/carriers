import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios"
import { AMO_CLIENT } from "./amocrm.controller"
import * as fs from 'fs';
import { CarriersService } from "src/carriers/carriers.service";

const getCustomField = (name, data, isArray = false) => {
    const values = data?.custom_fields_values?.find((item) =>  item.field_name === name)?.values?.map(item => item.value)
    // if (values?.length > 1 ) console.warn(name, 'Больше 1', values)
    return !isArray ? values?.[0] : values
}

@Injectable()
export class AmoCrmService {

    constructor(private readonly httpService: HttpService, private readonly carriersService: CarriersService) {}

    async getToken(code: string): Promise<any> {
        // fs.writeFileSync('/src/amo-crm/token.txt', `${JSON.stringify(result.data)}`)
        
        try {
            const result = await this.httpService.axiosRef.post(`https://${AMO_CLIENT.domain}/oauth2/access_token`,
                {
                    "client_id": AMO_CLIENT.client_id,
                    "client_secret": AMO_CLIENT.client_secret,
                    "grant_type": "authorization_code",
                    "code": code,
                    "redirect_uri": AMO_CLIENT.redirect_uri
                },
                {
                    "headers": {"content-type": "application/json"}
                })
                fs.writeFileSync('./src/amo-crm/token.txt', JSON.stringify(result.data))
                
                return result.data
        } catch (e) {
            return e
        }
    }

    async getRefreshToken(): Promise<any> {
        const refreshToken = fs.readFileSync('./src/amo-crm/token.txt', 'utf8')

        try {

            const accessTokenResult = await this.httpService.axiosRef.post(`https://${AMO_CLIENT.domain}/oauth2/access_token`, 
                {
                    "client_id": AMO_CLIENT.client_id,
                    "client_secret": AMO_CLIENT.client_secret,
                    "grant_type": "refresh_token",
                    "refresh_token": JSON.parse(refreshToken).refresh_token,
                    "redirect_uri": AMO_CLIENT.redirect_uri
                },
                {
                    "headers": {"content-type": "application/json"}
                })
            fs.writeFileSync('./src/amo-crm/token.txt', JSON.stringify(accessTokenResult.data))
        } catch (e) {
            return e
        }
    }

    async getPostInfo(page, type): Promise<any> {
        try {
            const accessToken = fs.readFileSync('./src/amo-crm/token.txt', 'utf8')
            const getInfo = await this.httpService.axiosRef.get(`https://radiancedir.amocrm.ru/api/v4/${type}?page=${page}`, 
                {
                    "headers" : {
                                    "content-type": "application/json",
                                    "Authorization": `Bearer ${JSON.parse(accessToken).access_token}`
                                }
                })
            return getInfo.data
        } catch (e) {   
            return "Error"
        }
    }

    async allPages (type, page = 1, prev = []) {
        const result = await this.getPostInfo(page, type)
        
        if (result?._links) {
            prev.push(result?._embedded?.[type])
            return await this.allPages(type, page + 1, prev)
        } else {
            return prev.flat()
        }
    }   
    
    async transformContact(contact) {
        const phone = getCustomField('PHONE', contact, true)
        const email = getCustomField('EMAIL', contact, true)
        const position = getCustomField('POSITION', contact, true)
        const amoIdCarriers = await contact._embedded.companies.map((item) => item.id) 
        const carriersIds = await this.carriersService.getByAmoIds(amoIdCarriers)
        return {
            carriersIds,
            firstname: contact.first_name,
            lastname: contact.last_name,
            email: email,
            position: position,
            phone: phone
        }
    }

    transformCarrier(carrier) {
        // const type = getCustomField('Тип компании', carrier, true)
        return {
            amoId: carrier.id,
            name: carrier.name,
            // type: type
            // lastname: carrier.lastname,
            // email: carrier.email,
            // position: carrier.email,
            // phone: carrier.phone,
            // amoid: carrier.carrier_id
            // carrier_id: string
        }
    }

    async sync() {
        const resultCompanies = await this.allPages('companies') 
        const resultContacts = await this.allPages('contacts')
        const transformCompanies = resultCompanies.map(this.transformCarrier)
        transformCompanies.forEach(item => { 
            this.carriersService.create(item)
        });
        const transformContacts = resultContacts.map(this.transformContact)
        transformContacts.forEach

    }


}


