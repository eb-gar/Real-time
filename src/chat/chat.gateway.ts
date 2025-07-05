import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  users: string[] = [];
  userNames: Map<string, string> = new Map();

  handleConnection(client: Socket) {
    console.log(`Cliente conectado: ${client.id}`);
    this.users.push(client.id);
    this.server.emit('users', this.users);
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
    const userName = this.userNames.get(client.id) || 'Un usuario';
    this.users = this.users.filter(user => user !== client.id);
    this.userNames.delete(client.id);
    this.server.emit('users', this.users);
    this.server.emit('chatMessage', { 
      user: 'System', 
      message: `${userName} ha abandonado el chat (${this.users.length} usuarios conectados)` 
    });
  }

  @SubscribeMessage('chatMessage')
  handleMessage(client: Socket, payload: { user: string; message: string }): void {
    console.log(`Mensaje recibido de ${payload.user}: ${payload.message}`);
    this.server.emit('chatMessage', payload);
  }

  @SubscribeMessage('userJoined')
  handleUserJoined(client: Socket, payload: { user: string }): void {
    this.userNames.set(client.id, payload.user);
    this.server.emit('chatMessage', { 
      user: 'System', 
      message: `${payload.user} se ha unido al chat (${this.users.length} usuarios conectados)` 
    });
  }
}