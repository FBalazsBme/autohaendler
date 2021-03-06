/**
 * Merlin CPQ
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Request object for fetching merlin settings
 */
export interface MultiSettingResponse { 
    success?: boolean;
    /**
     * Key value mapping for merlin settings
     */
    values?: { [key: string]: string; };
    /**
     * List of keys that could not be found
     */
    missing?: Array<string>;
}

