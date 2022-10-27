import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios"
export const MESSAGGIO_API_KEY = ""

@Injectable()
export class MessaggioService {
    
    constructor(private readonly httpService: HttpService) {}

    async sendMessage(phones: string[]): Promise<any> {
        try {
            const result = await this.httpService.axiosRef.post(`https://msg.messaggio.com/api/v1/send`,
                {
                    // recipients: phones.map((phone) => ({phone})),
                    recipients: [{phone: ''}],
                    channels: ["viber"],
                    viber: {
                        from: 'Radiance',
                        label: 'promotion',
                        content: [
                            {
                                type: "text",
                                text: "Текст сообщения Viber"
                            }
                        ]
                    }
                },
                {
                    "headers": {"Messaggio-Login" : MESSAGGIO_API_KEY}
                }
            )            
            console.log(result)    
            return result.data
        
        } catch (e) {
            console.log('errror:', e)
            return e
        }
    }
}