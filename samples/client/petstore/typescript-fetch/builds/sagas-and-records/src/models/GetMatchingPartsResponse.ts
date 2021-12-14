/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MatchingParts,
    MatchingPartsFromJSON,
    MatchingPartsFromJSONTyped,
    MatchingPartsToJSON,
} from './MatchingParts';
import {
    ResponseMeta,
    ResponseMetaFromJSON,
    ResponseMetaFromJSONTyped,
    ResponseMetaToJSON,
} from './ResponseMeta';

/**
 * 
 * @export
 * @interface GetMatchingPartsResponse
 */
export interface GetMatchingPartsResponse {
    /**
     * 
     * @type {ResponseMeta}
     * @memberof GetMatchingPartsResponse
     */
    meta: ResponseMeta;
    /**
     * 
     * @type {MatchingParts}
     * @memberof GetMatchingPartsResponse
     */
    data?: MatchingParts;
}

export function GetMatchingPartsResponseFromJSON(json: any): GetMatchingPartsResponse {
    return GetMatchingPartsResponseFromJSONTyped(json, false);
}

export function GetMatchingPartsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMatchingPartsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'meta': ResponseMetaFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : MatchingPartsFromJSON(json['data']),
    };
}

export function GetMatchingPartsResponseToJSON(value?: GetMatchingPartsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meta': ResponseMetaToJSON(value.meta),
        'data': MatchingPartsToJSON(value.data),
    };
}

