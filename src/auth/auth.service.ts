import { Injectable } from '@nestjs/common';
import { Admin } from 'src/admin/admin.entity';

@Injectable()
export class AuthService {

    public Admins: Admin[] = [
        {
            name: "admin1",
            password: "user1"
        },
        {
            name: "admin2",
            password: "user2"
        }
    ];
    // it is object method
    getadminbyname(adminname: string): Admin {
        return this.Admins.find((admin: Admin) => admin.name == adminname);

    }
}
