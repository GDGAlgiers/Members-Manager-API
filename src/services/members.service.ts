//import bcrypt from 'bcrypt';
//import { CreateUserDto } from '@dtos/users.dto';
import { CreateMemberDto } from '@/dtos/members.dto';
import { HttpException } from '@exceptions/HttpException';
import { Member, MemberRole } from '@interfaces/members.interface';
import memberModel from '@models/members.model';
import { isEmpty } from '@utils/util';

class MemberService {
  public members = memberModel;

  public async findAllMembers(): Promise<Member[]> {
    const members: Member[] = await this.members.find();
    return members;
  }

  public async findMemberById(memberId: string): Promise<Member> {
    if (isEmpty(memberId)) throw new HttpException(400, 'ID of member must be provided');

    const findMember: Member = await this.members.findOne({ _id: memberId });
    if (!findMember) throw new HttpException(404, `Could not find member with id ${memberId}`);

    return findMember;
  }

  public async createMember(memberData: CreateMemberDto): Promise<Member> {
    if (isEmpty(memberData)) throw new HttpException(400, 'no data was provided');

    const findMember: Member = await this.members.findOne({ email: memberData.email });
    if (findMember) throw new HttpException(409, `You're email ${memberData.email} already exists`);

    const createMemberData: Member = await this.members.create({ ...memberData });

    return createMemberData;
  }
}

export default MemberService;
