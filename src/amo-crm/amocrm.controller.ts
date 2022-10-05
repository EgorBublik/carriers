import { Body, Controller, Get, Post } from '@nestjs/common';
import { AmoCrmService } from './amocrm.service';
import { forwardRef, Inject } from '@nestjs/common';

export const AMO_CLIENT = {
    domain: "radiancedir.amocrm.ru",
    client_id: "c96b6288-a5b7-4dee-972f-b75aa5fbda24",
    client_secret: "",
    redirect_uri: "https://radiance.tools-api.com/api/get_token.php"
}

@Controller('amo-crm')
export class AmoCrmController {
    
    constructor (@Inject(forwardRef(() => AmoCrmService))private readonly amoCrmService: AmoCrmService) {}

    // @Get('get-url')
    //     async getUrl(): Promise<any> {
    //     return `https://www.amocrm.com/oauth?client_id=${AMO_CLIENT.client_id}&mode=popup`
    // }

    @Post('get-token')
    async setCode(@Body() {code}: {code:string}): Promise<any> {
        return this.amoCrmService.getToken(code)
    }

    @Get('getAmoAccountInfo')
    async setRefreshToken(): Promise<any> {
        await this.amoCrmService.getRefreshToken()
        await this.amoCrmService.sync()
        const resultCompanies = await this.amoCrmService.allPages('companies') 
        const resultContacts = await this.amoCrmService.allPages('contacts')
        return {
            // contacts: resultContacts,
            contacts: resultContacts.map(this.amoCrmService.transformContact),
            // companies: resultCompanies,
            companies: resultCompanies.map(this.amoCrmService.transformCarrier),
        }

    }
}
