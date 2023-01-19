import { BaseDatabase } from "./BaseDatabase";

export class GetUserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async select({ id, name, email, password }: any): Promise<void> {
    await GetUserDatabase.connection.select({
        GetUserDatabase
      })
      .into(GetUserDatabase.TABLE_NAME);
  }
}