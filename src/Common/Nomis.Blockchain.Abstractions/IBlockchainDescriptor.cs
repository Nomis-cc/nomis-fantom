// ------------------------------------------------------------------------------------------------------
// <copyright file="IBlockchainDescriptor.cs" company="Nomis">
// Copyright (c) Nomis, 2023. All rights reserved.
// The Application under the MIT license. See LICENSE file in the solution root for full license information.
// </copyright>
// ------------------------------------------------------------------------------------------------------

using Nomis.SoulboundTokenService.Interfaces.Enums;

namespace Nomis.Blockchain.Abstractions
{
    /// <summary>
    /// Blockchain descriptor.
    /// </summary>
    public interface IBlockchainDescriptor
    {
        /// <summary>
        /// Blockchain id.
        /// </summary>
        /// <remarks>
        /// EVM chain id or sequential number like 11111x.
        /// </remarks>
        public ulong ChainId { get; }

        /// <summary>
        /// Blockchain name.
        /// </summary>
        public string? ChainName { get; }

        /// <summary>
        /// Shore blockchain name.
        /// </summary>
        public string? BlockchainName { get; }

        /// <summary>
        /// Blockchain slug.
        /// </summary>
        public string? BlockchainSlug { get; }

        /// <summary>
        /// Blockchain explorer block URLs.
        /// </summary>
        public IList<string>? BlockExplorerUrls { get; }

        /// <summary>
        /// RPC provider URLs.
        /// </summary>
        // ReSharper disable once InconsistentNaming
        public IList<string>? RPCUrls { get; }

        /// <summary>
        /// Is the blockchain compatible with the EVM.
        /// </summary>
        // ReSharper disable once InconsistentNaming
        public bool IsEVMCompatible { get; }

        /// <summary>
        /// Soulbound token contract addresses.
        /// </summary>
        // ReSharper disable once InconsistentNaming
        public IDictionary<ScoreType, string>? SBTContractAddresses { get; }
    }
}