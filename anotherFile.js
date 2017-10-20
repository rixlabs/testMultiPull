
switch (msgType) {
    case "menu_sel":
        var bankletConfigId, bankletConfig, bankletInstance, proxy,
            afpId = data.afpId;

        // If msgData does not contain banklet configuration, use the default one for the afpId.
        bankletConfig = data.data;
        if (bankletConfig == null || bankletConfig.name == null) {
            bankletConfigId = navigationMenuToBankletMap[afpId];
            bankletConfig = getBankletConfig(bankletConfigId);
        }
        proxy = getBankletMainProxy();
        bankletInstance = getBankletInstance(proxy, bankletConfig);
        proxy.startInstance(bankletInstance);
        break;
