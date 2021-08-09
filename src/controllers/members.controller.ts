import { NextFunction, Request, Response } from 'express';
import { CreateMemberDto } from '@dtos/members.dto';
import { Member } from '@interfaces/members.interface';

import MemberService from '@services/members.service';

class MembersController {
  public memberService = new MemberService();

  public getMembers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllMembersData: Member[] = await this.memberService.findAllMembers();

      res.status(200).json({ data: findAllMembersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getMemberById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const MemberId: string = req.params.id;
      const findOneMemberData: Member = await this.memberService.findMemberById(MemberId);

      res.status(200).json({ data: findOneMemberData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const MemberData: CreateMemberDto = req.body;
      const createMemberData: Member = await this.memberService.createMember(MemberData);

      res.status(201).json({ data: createMemberData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default MembersController;
