/**
 * Created by   on 3/2/2017.
 */
export enum ErrorCodes {
    CATEGORY_DOES_NOT_EXISTS = 1,
    MARKET_DOES_NOT_EXISTS,
    NO_SUCH_CODE,
    EVENT_DOES_NOT_EXISTS,
    INCORRECT_MARAKET_CODE,
    NOT_SUPPORTED_EVENT_TYPE,
    INCORRECT_SELECTION,
    FOUND_MORE_THAN_ONE_EVENT,
    EVENT_NOT_FOUND,
    PARTICIPANT_NOT_MAPPED,
    SPORT_NOT_MAPPED,
    COUNTRY_NOT_MAPPED,
    LEAGUE_NOT_MAPPED,
    INCORRECT_SELECTION_TYPE,
    MARKET_ID_IS_MISSING,
    MAP_ID_IS_MISSING,
    QUERY_ERROR,
    SELECTIONS_MAPPINGS_MISSING,
    SELECTION_MAP_ID_IS_MISSING,
    SELECTION_SYSTEM_ID_IS_MISSING,
    PROVIDER_ID_IS_MISSING,
    MARKET_MAPPINGS_MISSING,
    MARKET_NOT_MAPPED,
    EVENT_NOT_MAPPED,
    SELECTION_NOT_MAPPED,
    EVENT_MARKET_NOT_MAPPED,
    UNKNOWN_PROVIDER,
    PARTICIPANT_ID_MISSING,
    INVALID_USER_ID,
    BAD_REQUEST,
    WRONG_ENTITY,
    NOT_FOUND,
    USER_ID_MISSING,
    USER_NOT_FOUND,
    SPORT_NOT_FOUND,
    COUNTRY_NOT_FOUND,
    LEAGUE_NOT_FOUND,
    SELECTION_DOES_NOT_EXISTS,
    EVENT_MARKET_NOT_FOUND,
    EVENT_SELECTION_NOT_FOUND,
    INCORRECT_AMOUNT,
    ACCESS_DENIED,
    EVENT_IS_NOT_ACTIVE,
    EVENT_MARKET_IS_NOT_ACTIVE,
    EVENT_SELECTION_IS_NOT_ACTIVE,
    MARKET_IS_NOT_ACTIVE,
    SPORT_IS_NOT_ACTIVE,
    COUNTRY_IS_NOT_ACTIVE,
    LEAGUE_IS_NOT_ACTIVE,
    EVENT_SELECTION_ODD_RESTRICTION
}
export class ErrorUtil {
    static newError(errorCode: ErrorCodes | string, message?: string) {
        if (errorCode in ErrorCodes) return new Error(ErrorCodes[errorCode])
        return new Error(errorCode as string);
    }
}