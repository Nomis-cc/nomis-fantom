// ------------------------------------------------------------------------------------------------------
// <copyright file="FantomExtensions.cs" company="Nomis">
// Copyright (c) Nomis, 2023. All rights reserved.
// The Application under the MIT license. See LICENSE file in the solution root for full license information.
// </copyright>
// ------------------------------------------------------------------------------------------------------

using Nomis.Api.Common.Extensions;
using Nomis.Api.Fantom.Settings;
using Nomis.Ftmscan.Interfaces;
using Nomis.ScoringService.Interfaces.Builder;

namespace Nomis.Api.Fantom.Extensions
{
    /// <summary>
    /// Fantom extension methods.
    /// </summary>
    public static class FantomExtensions
    {
        /// <summary>
        /// Add Fantom blockchain.
        /// </summary>
        /// <typeparam name="TServiceRegistrar">The service registrar type.</typeparam>
        /// <param name="optionsBuilder"><see cref="IScoringOptionsBuilder"/>.</param>
        /// <returns>Returns <see cref="IScoringOptionsBuilder"/>.</returns>
        public static IScoringOptionsBuilder WithFantomBlockchain<TServiceRegistrar>(
            this IScoringOptionsBuilder optionsBuilder)
            where TServiceRegistrar : IFantomServiceRegistrar, new()
        {
            return optionsBuilder
                .With<FantomAPISettings, TServiceRegistrar>();
        }
    }
}