import { Injectable } from '@nestjs/common';
import { Admin } from 'src/admin/admin.entity';

@Injectable()
export class AuthService {

    async getadminbyname(username: string, password: string): Promise<boolean> {
        const adminUsername = process.env.ADMIN_USERNAME;
        const adminPassword = process.env.ADMIN_PASSWORD;
       // console.log(username, password, adminPassword, adminUsername)

        if (username === adminUsername && password === adminPassword) {
            return true;
        } else {
            throw new Error('Invalid credentials');
        }
    }
}
