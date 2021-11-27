// #region Copyright (c) 2021 Bits Americas S.A.S
//
// All rights are reserved. Reproduction or transmission in whole or in part, in 
// any form or by any means, electronic, mechanical or otherwise, is prohibited 
// without the prior written consent of the copyright owner. 
//
// Filename IUserRetriever.ts, created on Tue Nov 09 2021.
//
// #endregion

import Pedidos from "../../../database/models/Pedidos";

//#region 
// Description: Interface with exposed methods without working with user use case.
// Author:      Jonathan Bonilla.
// Date:        09/11/2021
//#endregion
export interface IUserRetriever {

  //#region Methods

  //#region 
  // Description: Logic method for get all users.
  // Author:      Jonathan Bonilla.
  // Date:        09/11/2021
  //#endregion
  GetUsers(): Promise<Pedidos[]>;

  //#endregion

}