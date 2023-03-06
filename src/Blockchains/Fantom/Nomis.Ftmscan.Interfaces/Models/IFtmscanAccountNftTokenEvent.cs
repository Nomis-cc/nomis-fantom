// ------------------------------------------------------------------------------------------------------
// <copyright file="IFtmscanAccountNftTokenEvent.cs" company="Nomis">
// Copyright (c) Nomis, 2023. All rights reserved.
// The Application under the MIT license. See LICENSE file in the solution root for full license information.
// </copyright>
// ------------------------------------------------------------------------------------------------------

using System.Text.Json.Serialization;

namespace Nomis.Ftmscan.Interfaces.Models
{
    /// <summary>
    /// Ftmscan account NFT token event.
    /// </summary>
    public interface IFtmscanAccountNftTokenEvent
    {
        /// <summary>
        /// Hash.
        /// </summary>
        [JsonPropertyName("hash")]
        public string? Hash { get; set; }

        /// <summary>
        /// From address.
        /// </summary>
        [JsonPropertyName("from")]
        public string? From { get; set; }

        /// <summary>
        /// Contract address.
        /// </summary>
        [JsonPropertyName("contractAddress")]
        public string? ContractAddress { get; set; }

        /// <summary>
        /// To address.
        /// </summary>
        [JsonPropertyName("to")]
        public string? To { get; set; }

        /// <summary>
        /// Token identifier.
        /// </summary>
        [JsonPropertyName("TokenID")]
        public string? TokenId { get; set; }
    }
}