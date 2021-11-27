// #region Copyright (c) 2021 Bits Americas S.A.S
//
// All rights are reserved. Reproduction or transmission in whole or in part, in 
// any form or by any means, electronic, mechanical or otherwise, is prohibited 
// without the prior written consent of the copyright owner. 
//
// Filename container.ts, created on Mon Nov 08 2021.
//
// #endregion

//#region module import

import { createContainer, asClass, AwilixError, asValue } from 'awilix';
import { UserMySQLRepository } from './user/infrastructure/repositories/UserMySQLRepository';
import { UserPostgreSQLRepository } from './user/infrastructure/repositories/UserPostgreSQLRepository';
import { UserController } from './user/interfaceAdapters/UserController';
import { UserRetriever } from './user/application/implementation/UserRetriever';
import { UserContext } from './user/domain/UserContext';
import UserApi from './user/infrastructure/UserApi';

//#endregion

//#region 
// Description: IoC - Registry and instance of dependencies used in the project (Dependency Injection).
// Author:      Jonathan Bonilla.
// Date:        08/11/2021
//#endregion
export default () => {

  //#region Methods

  // Container creation.
  const container = createContainer({
    injectionMode: 'PROXY'
  });

  // Containerized dependency registration.
  container.register({

    //#region 1-Infrastructure Layer.

    //#region User api registry.

    userApi: asClass(UserApi).scoped(),

    //#endregion

    //#region User repositories registry.

    userMySQLRepository: asClass(UserMySQLRepository).scoped(),
    userPostgreSQLRepository: asClass(UserPostgreSQLRepository).scoped(),

    //#endregion

    //#endregion

    //#region 2-InterfaceAdapter Layer

    //#region Adapters registry.

    userController: asClass(UserController).scoped(),

    //#endregion

    //#endregion

    //#region 3-Application Layer

    //#region services Application registry.

    userRetriever: asClass(UserRetriever).scoped(),

    //#endregion

    //#endregion

    //#region 4-Domain Layer

    //#region services Domain registry.

    userContext: asClass(UserContext).scoped()

    //#endregion

    //#endregion

  });

  //#endregion

}

