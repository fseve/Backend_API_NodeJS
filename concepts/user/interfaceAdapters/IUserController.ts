// #region Copyright (c) 2021 Bits Americas S.A.S
//
// All rights are reserved. Reproduction or transmission in whole or in part, in 
// any form or by any means, electronic, mechanical or otherwise, is prohibited 
// without the prior written consent of the copyright owner. 
//
// Filename IUserController.ts, created on Mon Nov 08 2021.
//
// #endregion

import Pedidos from "../../database/models/Pedidos";

//#region 
// Description: Interface with exposed methods without working with user information.
// Author:      Jonathan Bonilla.
// Date:        08/11/2021
//#endregion
export interface IUserController {

	//#region Methods

	//#region 
  // Description: Logic that allows to retrieve the information of all users.
  // Author:      Jonathan Bonilla.
  // Date:        08/11/2021
  //#endregion
	GetUsers(): Promise<Pedidos[]>;

	//#endregion

}