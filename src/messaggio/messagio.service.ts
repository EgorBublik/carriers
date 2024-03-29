import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios"
export const MESSAGGIO_API_KEY = ""

@Injectable()
export class MessaggioService {
    
    constructor(private readonly httpService: HttpService) {}

    async sendMessage({data}): Promise<any> {
        const result = await this.httpService.axiosRef.post(`https://msg.messaggio.com/api/v1/send`,
            {
                recipients: data.phoneState,
                // recipients: [{phone: ''}],
                channels: ["viber"],
                viber: {
                    from: 'Radiance',
                    label: 'promotion',
                    content: [
                        {
                            type: "text",
                            text: data.textViber
                        }
                    ]
                }
            },
            {
                "headers": {"Messaggio-Login" : MESSAGGIO_API_KEY}
            }
        )            
        return result.data
    }
}