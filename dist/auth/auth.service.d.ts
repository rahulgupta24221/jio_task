import { Admin } from 'src/admin/admin.entity';
export declare class AuthService {
    Admins: Admin[];
    getadminbyname(adminname: string): Admin;
}
