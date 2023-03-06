// ------------------------------------------------------------------------------------------------------
// <copyright file="Ftmscan.cs" company="Nomis">
// Copyright (c) Nomis, 2023. All rights reserved.
// The Application under the MIT license. See LICENSE file in the solution root for full license information.
// </copyright>
// ------------------------------------------------------------------------------------------------------

using Microsoft.Extensions.DependencyInjection;
using Nomis.Ftmscan.Extensions;
using Nomis.Ftmscan.Interfaces;

namespace Nomis.Ftmscan
{
    /// <summary>
    /// Ftmscan service registrar.
    /// </summary>
    public sealed class Ftmscan :
        IFantomServiceRegistrar
    {
        /// <inheritdoc/>
        public IServiceCollection RegisterService(
            IServiceCollection services)
        {
            return services
                .AddFtmscanService();
        }
    }
}