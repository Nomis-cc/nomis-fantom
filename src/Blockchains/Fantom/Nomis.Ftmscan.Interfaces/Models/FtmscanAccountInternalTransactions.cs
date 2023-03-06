// ------------------------------------------------------------------------------------------------------
// <copyright file="FtmscanAccountInternalTransactions.cs" company="Nomis">
// Copyright (c) Nomis, 2023. All rights reserved.
// The Application under the MIT license. See LICENSE file in the solution root for full license information.
// </copyright>
// ------------------------------------------------------------------------------------------------------

using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace Nomis.Ftmscan.Interfaces.Models
{
    /// <summary>
    /// Ftmscan account internal transactions.
    /// </summary>
    public class FtmscanAccountInternalTransactions :
        IFtmscanTransferList<FtmscanAccountInternalTransaction>
    {
        /// <summary>
        /// Status.
        /// </summary>
        [JsonPropertyName("status")]
        public int Status { get; set; }

        /// <summary>
        /// Message.
        /// </summary>
        [JsonPropertyName("message")]
        public string? Message { get; set; }

        /// <summary>
        /// Account internal transaction list.
        /// </summary>
        [JsonPropertyName("result")]
        [DataMember(EmitDefaultValue = true)]
        public IList<FtmscanAccountInternalTransaction> Data { get; set; } = new List<FtmscanAccountInternalTransaction>();
    }
}