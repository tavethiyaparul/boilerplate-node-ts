import { Body, Get, JsonController, Post, Put, Req, Res, UseBefore } from "routing-controllers";
import RegisterService from "./register.service";
import { RegisterDTO } from "./register.validator";
import { Auth } from "../../middleware/auth";
import { hashPassword, jwtTokenGenerate } from "../../utils/comman/comman.utils";

@JsonController("/user")
export default class RegisterController {
    private registerService: RegisterService = new RegisterService();

    @Post("/register", { transformResponse: true })
    async register(@Req() request: any, @Res() response: any, @Body({ validate: true }) body: RegisterDTO) {
        try {
            const {
                name,
                email,
                password,
            } = body;

            const userExists = await this.registerService.findOne({ email });
            if (userExists)
                return response.formatter.error({}, false, "USER_ALREADY_EXISTS");

            const hashedPassword = await hashPassword(password);

            const userData: any = {
                name,
                email,
                password: hashedPassword
            };
            const userCreate: any = await this.registerService.create(userData);
            const id = userCreate._id;

            const token = jwtTokenGenerate({
                name,
                email,

            });

            return response.formatter.ok({ ...userData, token }, true, "USER_REGISTER_SUCCESS");
        } catch (error) {
            console.log("ERR:: ", error);
            return response.formatter.error({}, false, "USER_REGISTER_FAILED", error);
        }
    }


}
