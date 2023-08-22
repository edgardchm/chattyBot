import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements OnInit {
  newMessage: string = '';
  messages: { text: string; sender: 'user' | 'chatbot' }[] = [];
  chatbotResponse: string = '';

  constructor() {}

  ngOnInit() {}

  async sendMessage() {
    const userMessage = this.newMessage.trim();
    if (userMessage !== '') {
      this.messages.push({ text: userMessage, sender: 'user' });

      const openaiResponse = await this.sendToOpenAI(userMessage);

      this.messages.push({ text: openaiResponse, sender: 'chatbot' });

      this.newMessage = ''; 
    }
  }

  async sendToOpenAI(userMessage: string): Promise<string> {
    try {
      const apiKey = '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';
      const apiUrl = 'https://api.openai.com/v1/chat/completions'; 

      
      const messages = [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage },
      ];
      

      const response = await axios.post(
        apiUrl,
        {
          id: 'chatcmpl-123',
          object: 'chat.completion',   
          model: 'gpt-3.5-turbo',
          messages: messages
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      return response.data.choices[0].text; 
    } catch (error) {
      console.error('Error al comunicarse con los Servidores de OpenAI, Creditos Insuficientes:', error);
      return 'Error al comunicarse con los Servidores de OpenAI, Creditos Insuficientes.';
    }
  }

  displayChatbotResponse(response: string) {
    this.chatbotResponse = response;
  }
}
