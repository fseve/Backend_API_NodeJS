// #region Copyright (c) 2021 Bits Americas S.A.S
//
// All rights are reserved. Reproduction or transmission in whole or in part, in 
// any form or by any means, electronic, mechanical or otherwise, is prohibited 
// without the prior written consent of the copyright owner. 
//
// Filename IUserContext.ts, created on Tue Nov 09 2021.
//
// #endregion

//#region 
// Description: Interface with exposed methods to manage the interaction of user business rules.
// Author:      Jonathan Bonilla.
// Date:        09/11/2021
//#endregion
export interface IUserContext {

  //#region Methods

  //#region 
  // Description: Method with logic for apply business rules to all users.
  // Author:      Jonathan Bonilla.
  // Date:        09/11/2021
  //#endregion
  GetUsers(): Promise<void>;

  //#endregion

}