import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { AppDataSource } from "../data-source";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const userRepository = AppDataSource.getRepository(User);
    const user = new User();
    user.name = createUserDto.name;
    await userRepository.save(user);
    console.log("Saved a new user with id: " + user.id);
  }
}
