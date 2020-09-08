declare class Spawn
{
    constructor();
    null: boolean;
    valid: boolean;
    LoadGrid() : void;
    Enable() : void;
    Disable() : void;
    Enabled() : boolean;
    Reset() : void;
    Depop() : void;
    Repop() : void;
    Repop(delay : number) : void;
    ForceDespawn() : void;
    GetID() : number;
    GetX() : number;
    GetY() : number;
    GetZ() : number;
    GetHeading() : number;
    SetRespawnTimer(newrespawntime : number) : void;
    SetVariance(newvariance : number) : void;
    GetVariance() : number;
    RespawnTimer() : number;
    SpawnGroupID() : number;
    CurrentNPCID() : number;
    SetCurrentNPCID(nid : number) : void;
    GetSpawnCondition() : number;
    NPCPointerValid() : boolean;
    SetNPCPointer(n : NPC) : void;
    SetTimer(duration : number) : void;
    GetKillCount() : number;
}