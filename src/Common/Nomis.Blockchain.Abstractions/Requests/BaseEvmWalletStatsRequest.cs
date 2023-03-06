// ------------------------------------------------------------------------------------------------------
// <copyright file="BaseEvmWalletStatsRequest.cs" company="Nomis">
// Copyright (c) Nomis, 2023. All rights reserved.
// The Application under the MIT license. See LICENSE file in the solution root for full license information.
// </copyright>
// ------------------------------------------------------------------------------------------------------

using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

using Microsoft.AspNetCore.Mvc;
using Nomis.Blockchain.Abstractions.Contracts;
using Nomis.Chainanalysis.Interfaces.Contracts;
using Nomis.CyberConnect.Interfaces.Contracts;
using Nomis.Greysafe.Interfaces.Contracts;
using Nomis.Snapshot.Interfaces.Contracts;

namespace Nomis.Blockchain.Abstractions.Requests
{
    /// <summary>
    /// Base EVM wallet stats request.
    /// </summary>
    public abstract class BaseEvmWalletStatsRequest :
        WalletStatsRequest,
        IWalletTokensBalancesRequest,
        IWalletSnapshotProtocolRequest,
        IWalletGreysafeRequest,
        IWalletChainanalysisRequest,
        IWalletCyberConnectProtocolRequest
    {
        /// <inheritdoc />
        /// <example>true</example>
        [FromQuery]
        [JsonPropertyOrder(-8)]
        public bool GetHoldTokensBalances { get; set; } = true;

        /// <inheritdoc />
        /// <example>6</example>
        [FromQuery]
        [Range(typeof(int), "1", "8760")]
        [JsonPropertyOrder(-7)]
        public int SearchWidthInHours { get; set; } = 6;

        /// <inheritdoc />
        /// <example>true</example>
        [FromQuery]
        [JsonPropertyOrder(-6)]
        public bool UseTokenLists { get; set; } = true;

        /// <inheritdoc />
        /// <example>false</example>
        [FromQuery]
        [JsonPropertyOrder(-5)]
        public bool IncludeUniversalTokenLists { get; set; } = false;

        /// <inheritdoc />
        /// <example>false</example>
        [FromQuery]
        [JsonPropertyOrder(-4)]
        public bool GetSnapshotProtocolData { get; set; } = false;

        /// <inheritdoc />
        /// <example>true</example>
        [FromQuery]
        [JsonPropertyOrder(-3)]
        public bool GetGreysafeData { get; set; } = true;

        /// <inheritdoc />
        /// <example>true</example>
        [FromQuery]
        [JsonPropertyOrder(-2)]
        public bool GetChainanalysisData { get; set; } = true;

        /// <inheritdoc />
        /// <example>true</example>
        [FromQuery]
        [JsonPropertyOrder(-1)]
        public bool GetCyberConnectProtocolData { get; set; }
    }
}