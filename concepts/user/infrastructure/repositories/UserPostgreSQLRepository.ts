// #region Copyright (c) 2021 Bits Americas S.A.S
//
// All rights are reserved. Reproduction or transmission in whole or in part, in 
// any form or by any means, electronic, mechanical or otherwise, is prohibited 
// without the prior written consent of the copyright owner. 
//
// Filename UserPostgreSQLRepository.ts, created on Mon Nov 08 2021.
//
// #endregion

//#region module import

import { IUserRepository } from "./IUserRepository";

//#endregion

//#region 
// Description: Methods with logic for accessing database artifacts based on the PostgreSQL engine.
// Author:      Jonathan Bonilla.
// Date:        08/11/2021
//#endregion
export class UserPostgreSQLRepository implements IUserRepository {

	//#region Methods

	//#region Private

	//...

	//#endregion

	//#region Public

	//#region 
	// Description: Logic that allows to retrieve the information of all users.
	// Author:      Jonathan Bonilla.
	// Date:        08/11/2021
	//#endregion
	public async GetUsers(): Promise<void> {

		const query = "SELECT * FROM User ORDER BY Id DESC";
	}

	//#endregion

	//#endregion

}