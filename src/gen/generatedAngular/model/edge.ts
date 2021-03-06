/**
 * Temporal Graph API
 * API for Temporal Graph
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ji67mary@studserv.uni-leipzig.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { EdgeProperties } from './edgeProperties';


export interface Edge { 
    id?: string;
    label?: string;
    properties?: Array<EdgeProperties>;
    source?: string;
    target?: string;
}
