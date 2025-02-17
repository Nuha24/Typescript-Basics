interface UUser{
    name: string,
    email: string
}

interface Adminn{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: UUser | Adminn)
{
    if("isAdmin" in account){
        return account.isAdmin
    }
}