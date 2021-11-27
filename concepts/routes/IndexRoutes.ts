// #region Copyright (c) 2021 Bits Americas S.A.S
//
// All rights are reserved. Reproduction or transmission in whole or in part, in 
// any form or by any means, electronic, mechanical or otherwise, is prohibited 
// without the prior written consent of the copyright owner. 
//
// Filename IndexRoutes.ts, created on Fri Oct 29 2021.
//
// #endregion

//#region module import

import { Request, Response, Router } from 'express';

//#endregion

//#region 
// Description: Methods and properties with logic for route requests to and from the server.
// Author:      Jonathan Bonilla.
// Date:        29/10/2021
//#endregion
class IndexRoutes {

  //#region Constructors

  //#region 
  // Description: Default constructor to initialize context and class configuration.
  // Author:      Jonathan Bonilla.
  // Date:        29/10/2021
  //#endregion
  constructor() {
    this.router = Router();
    this.Routes();
  }

  //#endregion

  //#region Properties

  //#region Private

  //...

  //#endregion

  //#region Public

  //#region 
  // Description: Property that saves the context of the application started.
  // Author:      Jonathan Bonilla.
  // Date:        29/10/2021
  //#endregion
  public router: Router;

  //#endregion

  //#endregion

  //#region  Methods

  //#region Private 

  //...

  //#endregion

  //#region Public

  //#region 
  // Description: Method that configures the responses for the processing of requests to the server.
  // Author:      Jonathan Bonilla.
  // Date:        29/10/2021
  //#endregion
  public Routes() {
    this.router.get(
      '/', (req, res) => res.send('API: /api/user'));
  }

  //#endregion

  //#endregion
}

//#region Start and instance of routes.

const indexRouter = new IndexRoutes();
indexRouter.Routes();

//#endregion

//#region Export class for EC6 standard.

export default indexRouter.router;

//#endregion