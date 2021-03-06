import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';

@EventSubscriber()
export class OrmTransactionsSubscriber implements EntitySubscriberInterface {
  /**
   * Called after entity is loaded.
   */
  afterLoad(entity: unknown): void {
    console.log(`AFTER ENTITY LOADED: `, entity);
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<unknown>): void {
    console.log(`BEFORE POST INSERTED: `, event.entity);
  }

  /**
   * Called after entity insertion.
   */
  afterInsert(event: InsertEvent<unknown>): void {
    console.log(`AFTER ENTITY INSERTED: `, event.entity);
  }

  /**
   * Called before entity update.
   */
  beforeUpdate(event: UpdateEvent<unknown>): void {
    console.log(`BEFORE ENTITY UPDATED: `, event.entity);
  }

  /**
   * Called after entity update.
   */
  afterUpdate(event: UpdateEvent<unknown>): void {
    console.log(`AFTER ENTITY UPDATED: `, event.entity);
  }

  /**
   * Called before entity removal.
   */
  beforeRemove(event: RemoveEvent<unknown>): void {
    console.log(
      `BEFORE ENTITY WITH ID ${event.entityId} REMOVED: `,
      event.entity,
    );
  }

  /**
   * Called after entity removal.
   */
  afterRemove(event: RemoveEvent<unknown>): void {
    console.log(
      `AFTER ENTITY WITH ID ${event.entityId} REMOVED: `,
      event.entity,
    );
  }

  // /**
  //  * Called before transaction start.
  //  */
  // beforeTransactionStart(event: TransactionStartEvent) {
  //   console.log(`BEFORE TRANSACTION STARTED: `, event);
  // }

  // /**
  //  * Called after transaction start.
  //  */
  // afterTransactionStart(event: TransactionStartEvent) {
  //   console.log(`AFTER TRANSACTION STARTED: `, event);
  // }

  // /**
  //  * Called before transaction commit.
  //  */
  // beforeTransactionCommit(event: TransactionCommitEvent) {
  //   console.log(`BEFORE TRANSACTION COMMITTED: `, event);
  // }

  // /**
  //  * Called after transaction commit.
  //  */
  // afterTransactionCommit(event: TransactionCommitEvent) {
  //   console.log(`AFTER TRANSACTION COMMITTED: `, event);
  // }

  // /**
  //  * Called before transaction rollback.
  //  */
  // beforeTransactionRollback(event: TransactionRollbackEvent) {
  //   console.log(`BEFORE TRANSACTION ROLLBACK: `, event);
  // }

  // /**
  //  * Called after transaction rollback.
  //  */
  // afterTransactionRollback(event: TransactionRollbackEvent) {
  //   console.log(`AFTER TRANSACTION ROLLBACK: `, event);
  // }
}
