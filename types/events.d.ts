//NPC Events
declare interface BaseNPCEvent 
{
    self : NPC;
}

declare interface NPCEventSay extends BaseNPCEvent 
{ 
    other : Client;
    message : string;
    language : number;
}

declare interface NPCEventAggroSay extends BaseNPCEvent
{ 
    other : Client;
    message : string;
    language : number;
}

declare interface NPCEventProximitySay extends BaseNPCEvent
{ 
    other : Client;
    message : string;
    language : number;
}

declare interface NPCEventTrade extends BaseNPCEvent 
{ 
    other : Client;
    trade : Map<string, ItemInst>
}

declare interface NPCEventHp extends BaseNPCEvent 
{ 
    hp_event : number;
    inc_hp_event : number;
}

declare interface NPCEventTargetChange extends BaseNPCEvent 
{ 
    other : Mob;
}

declare interface NPCEventCastOn extends BaseNPCEvent
{ 
    spell : Spell;
}

declare interface NPCEventKilledMerit extends BaseNPCEvent 
{ 
    other : Client;
}

declare interface NPCEventSlay extends BaseNPCEvent 
{ 
    other : Mob;
}

declare interface NPCEventEnter extends BaseNPCEvent 
{ 
    other : Client;
}

declare interface NPCEventExit extends BaseNPCEvent 
{ 
    other : Client;
}

declare interface NPCEventTaskAccepted extends BaseNPCEvent 
{ 
    other : Client;
    task_id : number;
}

declare interface NPCEventPopupResponse extends BaseNPCEvent 
{ 
    other : Mob;
    popup_id : number;
}

declare interface NPCEventWaypointArrive extends BaseNPCEvent 
{ 
    other : Mob;
    wp : number;
}

declare interface NPCEventWaypointDepart extends BaseNPCEvent 
{ 
    other : Mob;
    wp : number;
}

declare interface NPCEventHateList extends BaseNPCEvent 
{
    other : Mob; 
    joined : boolean;
}

declare interface NPCEventCombat extends BaseNPCEvent 
{ 
    other : Mob; 
    joined : boolean;
}

declare interface NPCEventSignal extends BaseNPCEvent 
{ 
    signal : number;
}

declare interface NPCEventTimer extends BaseNPCEvent 
{ 
    timer : string;
}

declare interface NPCEventDeath extends BaseNPCEvent 
{ 
    other : Mob;
    damage : number;
    spell : Spell;
    skill_id : number;
}

declare interface NPCEventDeathComplete extends BaseNPCEvent 
{ 
    other : Mob;
    damage : number;
    spell : Spell;
    skill_id : number;
}

declare interface NPCEventCast extends BaseNPCEvent 
{ 
    spell : Spell;
}

declare interface NPCEventCastBegin extends BaseNPCEvent
{ 
    spell : Spell;
}

declare interface NPCEventFeignDeath extends BaseNPCEvent 
{ 
    other : Client;
}

declare interface NPCEventEnterArea extends BaseNPCEvent 
{ 
    area_id : number;
    area_type : number;
}

declare interface NPCEventLeaveArea extends BaseNPCEvent
{ 
    area_id : number;
    area_type : number;
}

// Player Events
declare interface BasePlayerEvent 
{
    self : Client;
}

declare interface PlayerEventSay extends BasePlayerEvent 
{ 
    message : string;
    language : number;
}

declare interface PlayerEventEnvironmentalDamage extends BasePlayerEvent 
{ 
    env_damage : number;
    env_damage_type : number;
    env_final_damage : number;
}

declare interface PlayerEventDeath extends BasePlayerEvent 
{ 
    other : Mob;
    damage : number;
    spell : Spell;
    skill : number;
}

declare interface PlayerEventDeathComplete extends BasePlayerEvent 
{ 
    other : Mob;
    damage : number;
    spell : Spell;
    skill : number;
}

declare interface PlayerEventTimer extends BasePlayerEvent 
{ 
    timer : string;
}

declare interface PlayerEventDiscoverItem extends BasePlayerEvent 
{ 
    item : Item;
}

declare interface PlayerEventFishSuccess extends BasePlayerEvent 
{ 
    item : ItemInst;
}

declare interface PlayerEventForageSuccess extends BasePlayerEvent 
{ 
    item : ItemInst;
}

declare interface PlayerEventClickObject extends BasePlayerEvent 
{ 
    object : GroundObject;
}

declare interface PlayerEventClickDoor extends BasePlayerEvent 
{ 
    door : Door;
}

declare interface PlayerEventSignal extends BasePlayerEvent 
{ 
    signal : number;
}

declare interface PlayerEventPopupResponse extends BasePlayerEvent 
{ 
    popup_id : number;
}

declare interface PlayerEventPlayerPickup extends BasePlayerEvent 
{ 
    item : ItemInst;
}

declare interface PlayerEventCast extends BasePlayerEvent 
{ 
    spell : Spell;
}

declare interface PlayerEventCastBegin extends BasePlayerEvent
{ 
    spell : Spell;
}

declare interface PlayerEventTaskFail extends BasePlayerEvent 
{ 
    task_id : number;
}

declare interface PlayerEventZone extends BasePlayerEvent 
{ 
    zone_id : number;
}

declare interface PlayerEventDuelWin extends BasePlayerEvent 
{ 
    other : Client;
}

declare interface PlayerEventDuelLose extends BasePlayerEvent
{ 
    other : Client;
}

declare interface PlayerEventLoot extends BasePlayerEvent 
{ 
    item : ItemInst;
    corpse : Corpse;
}

declare interface PlayerEventTaskStageComplete extends BasePlayerEvent 
{ 
    task_id : number;
    activity_id : number;
}

declare interface PlayerEventTaskComplete extends BasePlayerEvent
{ 
    count : number;
    task_id : number;
    activity_id : number;
}

declare interface PlayerEventTaskUpdate extends BasePlayerEvent 
{ 
    count : number;
    task_id : number;
    activity_id : number;
}

declare interface PlayerEventCommand extends BasePlayerEvent 
{ 
    command : string;
    args : Array<string>
}

declare interface PlayerEventCombineSuccess extends BasePlayerEvent 
{ 
    recipe_id : number;
    recipe_name : string;
}

declare interface PlayerEventCombineFailure extends BasePlayerEvent { 
    recipe_id : number;
    recipe_name : string;
}

declare interface PlayerEventFeignDeath extends BasePlayerEvent 
{ 
    other : NPC;
}

declare interface PlayerEventEnterArea extends BasePlayerEvent 
{ 
    area_id : number;
    area_type : number; 
}

declare interface PlayerEventLeaveArea extends BasePlayerEvent
{ 
    area_id : number;
    area_type : number; 
}

declare interface PlayerEventRespawn extends BasePlayerEvent
{
    option : number;
    resurrect : boolean;
}

declare interface PlayerEventUnhandledOpcode extends BasePlayerEvent 
{ 
    packet : Packet;
    connecting : boolean;
}

declare interface PlayerEventUseSkill extends BasePlayerEvent 
{ 
    skill_id : number;
    skill_level : number;
}

declare interface PlayerEventCombineValidate extends BasePlayerEvent 
{ 
    recipe_id : number;
    validate_type : string;
    zone_id : number;
    tradeskill_id : number;
}

declare interface PlayerEventBotCommand extends BasePlayerEvent 
{ 
    bot_command : string;
    args : Array<string>;
}

//Item Events
declare interface BaseItemEvent 
{
    self : ItemInst;
    owner: Client;
}

declare interface ItemEventItemClick extends BaseItemEvent 
{ 
    slot_id : number;
}

declare interface ItemEventItemClickCast extends BaseItemEvent 
{ 
    slot_id : number;
}

declare interface ItemEventTimer extends BaseItemEvent 
{ 
    timer : string;
}

declare interface ItemEventWeaponProc extends BaseItemEvent 
{ 
    target : Mob;
    spell : Spell;
}

declare interface ItemEventLoot extends BaseItemEvent 
{ 
    corpse : Corpse;
}

declare interface ItemEventEquipItem extends BaseItemEvent 
{ 
    slot_id : number;
}

declare interface ItemEventUnequipItem extends BaseItemEvent 
{ 
    slot_id : number;
}

declare interface ItemEventAugmentItem extends BaseItemEvent 
{ 
    aug : ItemInst;
    slot_id : number;
}

declare interface ItemEventUnaugmentItem extends BaseItemEvent 
{ 
    aug : ItemInst;
    slot_id : number;
}

declare interface ItemEventAugmentInsert extends BaseItemEvent 
{ 
    item : ItemInst;
    slot_id : number;
}

declare interface ItemEventAugmentRemove extends BaseItemEvent 
{ 
    item : ItemInst;
    slot_id : number;
    destroyed : boolean;
}

//Spell Events
declare interface BaseSpellEvent 
{
    self : Spell;
}

declare interface SpellEventSpellEffectClient extends BaseSpellEvent 
{
    target : Mob;
    buff_slot : number;
    caster_id : number;
}

declare interface SpellEventSpellBuffTicClient extends BaseSpellEvent 
{ 
    target : Mob;
    tics_remaining : number;
    caster_level : number;
    buff_slot : number;
    caster_id : number;
}

declare interface SpellEventSpellFade extends BaseSpellEvent 
{ 
    target : Mob;
    buff_slot : number;
    caster_id : number;
}

declare interface SpellEventSpellEffectTranslocateComplete extends BaseSpellEvent 
{ 
    target : Mob;
}

//Encounter Events
declare interface BaseEncounterEvent
{
    name : string;
}

declare interface EncounterEventTimer extends BaseEncounterEvent 
{ 
    timer : string;
}

declare interface EncounterEventEncounterLoad extends BaseEncounterEvent 
{ 
    encounter? : Encounter;
    data? : string;
}

declare interface EncounterEventEncounterUnload extends BaseEncounterEvent 
{ 
    data? : string;
}