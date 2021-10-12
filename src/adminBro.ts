import AdminJS from "adminjs";
import AdminJSExpressjs from "@adminjs/express";
import sequelizeDB from "@/sequelizeDB";

// DB init
AdminJS.registerAdapter(require('@adminjs/sequelize'))
AdminJS.registerAdapter(require('@adminjs/typeorm'))
AdminJS.registerAdapter(require('@adminjs/mongoose'))

// Sub module init
//AdminJS.registerAdapter(require('@adminjs/passwords'))
//AdminJS.registerAdapter(require('@adminjs/upload'))


const adminJs = new AdminJS({
    rootPath: "/admin",
    logoutPath: "/admin/logout",
    loginPath: "/admin/login",
    branding: {
        
    },
    databases: [ sequelizeDB ],
    // resources: [ sequelize2 ],
})

const router = AdminJSExpressjs.buildAuthenticatedRouter(adminJs, {
    authenticate: async (email: string, password: string) => {
        return true
    },
    cookiePassword: "JAOFDKOAOSJJIQEWIWJQ#J!@1A@#M!@M"
})

export default router;