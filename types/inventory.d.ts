declare class Inventory 
{
    constructor();
    GetItem(slot_id : number, bag_slot? : number) : ItemInst;
    PutItem(slot_id : number, item : ItemInst) : number;
    PushCursor(item : ItemInst) : number;
    SwapItem(source_slot : number, destination_slot : number) : boolean;
    DeleteItem(slot_id : number, quantity? : number) : boolean;
    CheckNoDrop(slot_id : number) : boolean;
    PopItem(slot_id : number) : ItemInst;
    HasItem(item_id : number, quantity? : number, where? : number) : number;
    HasSpaceForItem(item : Item, quantity : number) : boolean;
    HasItemByUse(use : number, quantity? : number, where? : number) : number;
    HasItemByLoreGroup(loregroup : number, where? : number) : number;
    FindFreeSlot(for_bag : boolean, try_cursor : boolean, min_size? : number, is_arrow? : boolean) : number;
    CalcSlotId(slot_id : number, bag_slot? : number) : number;
    CalcBagIdx(slot_id : number) : number;
    CalcSlotFromMaterial(material : number) : number;
    CalcMaterialFromSlot(equipslot : number) : number;
    CanItemFitInContainer(item : Item, container : Item) : boolean;
    SupportsContainers(slot_id : number) : boolean;
    GetSlotByItemInst(inst : ItemInst) : number;
}

declare namespace InventoryWhere
{
    const Personal : number;
    const Bank : number;
    const SharedBank : number;
    const Trading : number;
    const Cursor : number;
}
