"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    async login(ctx) {
        const { email, password } = ctx.request.only(['email', 'password']);
        return await ctx.auth.attempt(email, password);
    }
    async logout(ctx) {
        return await ctx.auth.logout();
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map