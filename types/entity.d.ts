declare class Entity
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
    GetID() : number;
    CastToClient() : Client;
    CastToNPC() : NPC;
    CastToMob() : Mob;
    CastToCorpse() : Corpse;
    CastToObject() : Object;
    CastToDoor() : Door;
}
