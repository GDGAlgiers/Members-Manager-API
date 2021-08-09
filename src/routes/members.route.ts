import { Router } from 'express';
import MembersController from '@controllers/members.controller';
import { CreateMemberDto } from '@dtos/members.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class MembersRoute implements Routes {
  public path = '/members';
  public router = Router();
  public MembersController = new MembersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.MembersController.getMembers);
    this.router.get(`${this.path}/:id`, this.MembersController.getMemberById);
    this.router.post(`${this.path}`, validationMiddleware(CreateMemberDto, 'body'), this.MembersController.createMember);
  }
}

export default MembersRoute;
