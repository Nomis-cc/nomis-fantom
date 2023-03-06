// ------------------------------------------------------------------------------------------------------
// <copyright file="FantomWalletStats.cs" company="Nomis">
// Copyright (c) Nomis, 2023. All rights reserved.
// The Application under the MIT license. See LICENSE file in the solution root for full license information.
// </copyright>
// ------------------------------------------------------------------------------------------------------

using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

using Nomis.Aave.Interfaces.Responses;
using Nomis.Aave.Interfaces.Stats;
using Nomis.Blockchain.Abstractions.Stats;
using Nomis.Dex.Abstractions.Contracts;
using Nomis.Dex.Abstractions.Stats;
using Nomis.Utils.Contracts.Stats;

namespace Nomis.Ftmscan.Interfaces.Models
{
    /// <summary>
    /// Fantom wallet stats.
    /// </summary>
    public sealed class FantomWalletStats :
        BaseEvmWalletStats<FantomTransactionIntervalData>,
        IWalletDexTokenSwapPairsStats,
        IWalletNftStats,
        IWalletAaveStats
    {
        /// <inheritdoc/>
        public override string NativeToken => "FTM";

        /// <inheritdoc/>
        [Display(Description = "Total NFTs on wallet", GroupName = "number")]
        public int NftHolding { get; set; }

        /// <inheritdoc/>
        [Display(Description = "NFT trading activity", GroupName = "Native token")]
        public decimal NftTrading { get; set; }

        /// <inheritdoc/>
        [Display(Description = "NFT worth on wallet", GroupName = "Native token")]
        public decimal NftWorth { get; set; }

        /// <inheritdoc/>
        [Display(Description = "DEX tokens balances", GroupName = "collection")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public IEnumerable<DexTokenSwapPairsData>? DexTokensSwapPairs { get; set; }

        /// <inheritdoc/>
        [Display(Description = "The Aave protocol user account data", GroupName = "value")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public AaveUserAccountDataResponse? AaveData { get; set; }

        /// <inheritdoc cref="IWalletCommonStats{TTransactionIntervalData}.ExcludedStatDescriptions"/>
        [JsonIgnore]
        public override IEnumerable<string> ExcludedStatDescriptions =>
            base.ExcludedStatDescriptions
                .Union(new List<string>
                {
                    nameof(DexTokensSwapPairs),
                    nameof(AaveData)
                });
    }
}