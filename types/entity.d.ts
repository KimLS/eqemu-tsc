declare class Lua_Entity
{
    constructor();
    null : boolean;
    valid : boolean;
    IsClient() : boolean;
    IsNPC() : boolean;
    IsMob() : boolean;
    IsMerc() : boolean;
    IsCorpse() : boolean;
    IsPlayerCorpse() : boolean;
    IsNPCCorpse() : boolean;
    IsObject() : boolean;
    IsDoor() : boolean;
    IsTrap() : boolean;
    IsBeacon() : boolean;
    IsEncounter() : boolean;
    IsBot() : boolean;
    GetId() : number;
    CastToClient() : Lua_Client;
    CastToNPC() : Lua_Entity;
    CastToMob() : Lua_Mob;
    CastToCorpse() : Lua_Entity;
    CastToObject() : Lua_Entity;
    CastToDoor() : Lua_Entity;
}
