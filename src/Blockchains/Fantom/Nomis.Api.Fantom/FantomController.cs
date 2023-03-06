// ------------------------------------------------------------------------------------------------------
// <copyright file="FantomController.cs" company="Nomis">
// Copyright (c) Nomis, 2023. All rights reserved.
// The Application under the MIT license. See LICENSE file in the solution root for full license information.
// </copyright>
// ------------------------------------------------------------------------------------------------------

using System.ComponentModel.DataAnnotations;
using System.Net.Mime;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Nomis.Api.Common.Swagger.Examples;
using Nomis.Ftmscan.Interfaces;
using Nomis.Ftmscan.Interfaces.Models;
using Nomis.Ftmscan.Interfaces.Requests;
using Nomis.SoulboundTokenService.Interfaces.Enums;
using Nomis.Utils.Wrapper;
using Swashbuckle.AspNetCore.Annotations;

namespace Nomis.Api.Fantom
{
    /// <summary>
    /// A controller to aggregate all Fantom-related actions.
    /// </summary>
    [Route(BasePath)]
    [ApiVersion("1")]
    [SwaggerTag("Fantom blockchain.")]
    public sealed class FantomController :
        ControllerBase
    {
        /// <summary>
        /// Base path for routing.
        /// </summary>
        internal const string BasePath = "api/v{version:apiVersion}/fantom";

        /// <summary>
        /// Common tag for Fantom actions.
        /// </summary>
        internal const string FantomTag = "Fantom";

        private readonly ILogger<FantomController> _logger;
        private readonly IFantomScoringService _scoringService;

        /// <summary>
        /// Initialize <see cref="FantomController"/>.
        /// </summary>
        /// <param name="scoringService"><see cref="IFantomScoringService"/>.</param>
        /// <param name="logger"><see cref="ILogger{T}"/>.</param>
        public FantomController(
            IFantomScoringService scoringService,
            ILogger<FantomController> logger)
        {
            _scoringService = scoringService ?? throw new ArgumentNullException(nameof(scoringService));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        /// <summary>
        /// Get Nomis Score for given wallet address.
        /// </summary>
        /// <param name="request">Request for getting the wallet stats.</param>
        /// <param name="cancellationToken"><see cref="CancellationToken"/>.</param>
        /// <returns>An Nomis Score value and corresponding statistical data.</returns>
        /// <remarks>
        /// Sample request:
        ///
        ///     GET /api/v1/fantom/wallet/0x258473A955E900385f984Fb3FbFd7480d5949cd7/score?scoreType=0&amp;nonce=0&amp;deadline=133160867380732039
        /// </remarks>
        /// <response code="200">Returns Nomis Score and stats.</response>
        /// <response code="400">Address not valid.</response>
        /// <response code="404">No data found.</response>
        /// <response code="500">Unknown internal error.</response>
        [HttpGet("wallet/{address}/score", Name = "GetFantomWalletScore")]
        [AllowAnonymous]
        [SwaggerOperation(
            OperationId = "GetFantomWalletScore",
            Tags = new[] { FantomTag })]
        [ProducesResponseType(typeof(Result<FantomWalletScore>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ErrorResult<string>), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResult<string>), StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(RateLimitResult), StatusCodes.Status429TooManyRequests)]
        [ProducesResponseType(typeof(ErrorResult<string>), StatusCodes.Status500InternalServerError)]
        [Produces(MediaTypeNames.Application.Json)]
        public async Task<IActionResult> GetFantomWalletScoreAsync(
            [Required(ErrorMessage = "Request should be set")] FantomWalletStatsRequest request,
            CancellationToken cancellationToken = default)
        {
            switch (request.ScoreType)
            {
                case ScoreType.Finance:
                    return Ok(await _scoringService.GetWalletStatsAsync<FantomWalletStatsRequest, FantomWalletScore, FantomWalletStats, FantomTransactionIntervalData>(request, cancellationToken));
                default:
                    throw new NotImplementedException();
            }
        }
    }
}