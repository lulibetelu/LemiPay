import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployEventPoolContracts: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, log } = hre.deployments;

  log("🟢 Deploying EventPoolImplementation...");
  const implementationDeployment = await deploy("EventPoolImplementation", {
    from: deployer,
    args: [], // no constructor args
    log: true,
    autoMine: true,
  });

  log(`✅ EventPoolImplementation deployed at ${implementationDeployment.address}`);

  log("🟢 Deploying EventPoolFactory...");
  const factoryDeployment = await deploy("EventPoolFactory", {
    from: deployer,
    args: [implementationDeployment.address], // Factory recibe la Implementation
    log: true,
    autoMine: true,
  });

  log(`✅ EventPoolFactory deployed at ${factoryDeployment.address}`);

  // Obtener instancias de ethers.js para interactuar si quieres
  const factory: Contract = await hre.ethers.getContract("EventPoolFactory", deployer);
  const implementation: Contract = await hre.ethers.getContract("EventPoolImplementation", deployer);

  log("🎉 Contracts deployed and ready to use!");
  log("Implementation:", implementation.address);
  log("Factory:", factory.address);
};

export default deployEventPoolContracts;
deployEventPoolContracts.tags = ["EventPool"];
