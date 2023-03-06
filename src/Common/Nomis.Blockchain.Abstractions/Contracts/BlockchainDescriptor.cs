// ------------------------------------------------------------------------------------------------------
// <copyright file="BlockchainDescriptor.cs" company="Nomis">
// Copyright (c) Nomis, 2023. All rights reserved.
// The Application under the MIT license. See LICENSE file in the solution root for full license information.
// </copyright>
// ------------------------------------------------------------------------------------------------------

using System.Text.Json.Serialization;

using Nomis.SoulboundTokenService.Interfaces.Enums;

// ReSharper disable InconsistentNaming
namespace Nomis.Blockchain.Abstractions.Contracts
{
    /// <inheritdoc cref="IBlockchainDescriptor"/>
    public class BlockchainDescriptor :
        IBlockchainDescriptor
    {
        /// <summary>
        /// Initialize <see cref="BlockchainDescriptor"/>.
        /// </summary>
        public BlockchainDescriptor()
        {
            // for serializers
        }

        /// <summary>
        /// Initialize <see cref="BlockchainDescriptor"/>.
        /// </summary>
        /// <param name="blockchainDescriptor"><see cref="IBlockchainDescriptor"/>.</param>
        public BlockchainDescriptor(
            IBlockchainDescriptor? blockchainDescriptor)
        {
            ChainId = blockchainDescriptor?.ChainId ?? 0;
            ChainName = blockchainDescriptor?.ChainName;
            BlockchainName = blockchainDescriptor?.BlockchainName;
            BlockchainSlug = blockchainDescriptor?.BlockchainSlug;
            BlockExplorerUrls = blockchainDescriptor?.BlockExplorerUrls;
            RPCUrls = blockchainDescriptor?.RPCUrls;
            IsEVMCompatible = blockchainDescriptor?.IsEVMCompatible ?? false;
            SBTContractAddresses = blockchainDescriptor?.SBTContractAddresses;
        }

        /// <summary>
        /// Initialize <see cref="BlockchainDescriptor"/>.
        /// </summary>
        /// <param name="chainId"><see cref="ChainId"/>.</param>
        /// <param name="chainName"><see cref="ChainName"/>.</param>
        /// <param name="blockchainName"><see cref="BlockchainName"/>.</param>
        /// <param name="blockchainSlug"><see cref="BlockchainSlug"/>.</param>
        /// <param name="blockExplorerUrls"><see cref="BlockExplorerUrls"/>.</param>
        /// <param name="isEVMCompatible"><see cref="IsEVMCompatible"/>.</param>
        /// <param name="rpcUrls"><see cref="RPCUrls"/>.</param>
        /// <param name="sbtContractAddresses"><see cref="SBTContractAddresses"/>.</param>
        public BlockchainDescriptor(
            ulong chainId,
            string? chainName = null,
            string? blockchainName = null,
            string? blockchainSlug = null,
            List<string>? blockExplorerUrls = null,
            List<string>? rpcUrls = null,
            Dictionary<ScoreType, string>? sbtContractAddresses = null,
            bool isEVMCompatible = false)
        {
            ChainId = chainId;
            ChainName = chainName;
            BlockchainName = blockchainName;
            BlockchainSlug = blockchainSlug;
            BlockExplorerUrls = blockExplorerUrls;
            RPCUrls = rpcUrls;
            IsEVMCompatible = isEVMCompatible;
            SBTContractAddresses = sbtContractAddresses;
        }

        /// <inheritdoc cref="IBlockchainDescriptor.ChainId"/>
        [JsonInclude]
        public ulong ChainId { get; set; }

        /// <inheritdoc cref="IBlockchainDescriptor.ChainName"/>
        [JsonInclude]
        public string? ChainName { get; set; }

        /// <inheritdoc cref="IBlockchainDescriptor.BlockchainName"/>
        [JsonInclude]
        public string? BlockchainName { get; set; }

        /// <inheritdoc cref="IBlockchainDescriptor.BlockExplorerUrls"/>
        [JsonInclude]
        public IList<string>? BlockExplorerUrls { get; set; } = new List<string>();

        /// <inheritdoc cref="IBlockchainDescriptor.RPCUrls"/>
        [JsonInclude]
        public IList<string>? RPCUrls { get; set; } = new List<string>();

        /// <inheritdoc cref="IBlockchainDescriptor.BlockchainSlug"/>
        [JsonInclude]
        public string? BlockchainSlug { get; set; }

        /// <inheritdoc cref="IBlockchainDescriptor.IsEVMCompatible"/>
        [JsonInclude]
        public bool IsEVMCompatible { get; set; }

        /// <inheritdoc cref="IBlockchainDescriptor.SBTContractAddresses"/>
        [JsonInclude]
        public IDictionary<ScoreType, string>? SBTContractAddresses { get; set; } = new Dictionary<ScoreType, string>();
    }
}