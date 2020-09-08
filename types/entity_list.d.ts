declare class EntityList
{
    constructor();
    null : boolean;
    valid : boolean;
    GetMobID(id : number) : Mob;
    GetMob(name : string) : Mob;
    GetMob(id : number) : Mob;
    GetMobByNpcTypeID(npc_type : number) : Mob;
    IsMobSpawnedByNpcTypeID(npc_type : number) : boolean;
    GetNPCByID(id : number) : NPC;
    GetNPCByNPCTypeID(npc_type : number) : NPC;
    GetNPCBySpawnID(spawn_id : number) : NPC;
    GetClientByName(name : string) : Client;
    GetClientByAccID(acct_id : number) : Client;
    GetClientByID(id : number) : Client;
    GetClientByCharID(char_id : number) : Client;
    GetClientByWID(wid : number) : Client;
    GetObjectByID(id : number) : Object;
    GetObjectByDBID(db_id : number) : Object;
    GetDoorsByID(id : number) : Door;
    GetDoorsByDBID(db_id : number) : Door;
    GetDoorsByDoorID(door_id : number) : Door;
    FindDoor(id : number) : Door;
    GetGroupByMob(mob : Mob) : Group;
    GetGroupByClient(client : Client) : Group;
    GetGroupByID(id : number) : Group;
    GetGroupByLeaderName(name : string) : Group;
    GetRaidByID(id : number) : Raid;
    GetRaidByClient(client : Client) : Raid;
    GetCorpseByOwner(client : Client) : Corpse;
    GetCorpseByID(id : number) : Corpse;
    GetCorpseByName(name : string) : Corpse;
    GetSpawnByID(id : number) : Spawn;
    ClearClientPetitionQueue() : void;
    CanAddHateForMob(p : Mob) : boolean;
    Message(guild_dbid : number, type : number, message : string) : void;
    MessageStatus(guild_dbid : number, min_status : number, type : number, message : string) : void;
    MessageClose(sender : Mob, skip_sender : boolean, dist : number, type : number, message : string) : void;
    FilteredMessageClose(sender : Mob, skip_sender : boolean, dist : number, type : number, filter : number, message : string) : void;
    RemoveFromTargets(mob : Mob, RemoveFromXTargets? : boolean) : void;
    ReplaceWithTarget(target : Mob, new_target : Mob) : void;
    OpenDoorsNear(opener : Mob) : void;
    MakeNameUnique(name : string) : string;
    RemoveNumbers(name : string) : string;
    SignalMobsByNPCID(npc_id : number, signal : number) : void;
    DeleteNPCCorpses() : number;
    DeletePlayerCorpses() : number;
    HalveAggro(who : Mob) : void;
    DoubleAggro(who : Mob) : void;
    ClearFeignAggro(who : Mob) : void;
    Fighting(who : Mob) : boolean;
    RemoveFromHateLists(who : Mob, set_to_one? : boolean) : void;
    MessageGroup(who : Mob, skip_close : boolean, type : number, message : string) : void;
    GetRandomClient(x : number, y : number, z : number, dist : number, exclude? : Client) : Client;
    GetMobList() : MobList;
    GetClientList() : ClientList;
    GetShuffledClientList() : ClientList;
    GetNPCList() : NPCList;
    GetCorpseList() : CorpseList;
    GetObjectList() : GroundObjectList;
    GetDoorsList() : DoorList;
    GetSpawnList() : SpawnList;
    SignalAllClients(signal : number) : void;
    ChannelMessage(from : Mob, channel_num : number, language : number, message : string) : void;
}

declare interface MobList
{
    entries : Array<Mob>
}

declare interface ClientList
{
    entries : Array<Client>
}

declare interface NPCList
{
    entries : Array<NPC>
}

declare interface CorpseList
{
    entries : Array<Corpse>
}

declare interface GroundObjectList
{
    entries : Array<GroundObject>
}

declare interface DoorList
{
    entries : Array<Door>
}

declare interface SpawnList
{
    entries : Array<Spawn>
}