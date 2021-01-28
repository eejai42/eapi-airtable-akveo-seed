/*
THIS FILE IS DERIVED - CHANGES WILL BE OVERWRITTEN (derived)
*/
import { EapiEndpointBase } from './eapi-endpoint-base';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, share } from 'rxjs/operators';
import { GDS } from '../../gds.service';

export class DataEndpointBase extends EapiEndpointBase {

    constructor(public gds: GDS) {
        super(gds)
    }






    // HANDLERS FOR: GlobalSetting
    public globalsetting: any = {};
    public globalsettings: any[] = [];
    public globalsettingsById: any = {};
    public globalsetting$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public globalsettings$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onGlobalSettingsChange(): Observable<any> {
        return this.globalsettings$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onGlobalSettingChange(): Observable<any> {
        return this.globalsetting$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadGlobalSettings(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'GlobalSettingId', 'globalsettings', 'GlobalSettings', '', sortField, true, behaviorSubject);
    }

    public async reloadGlobalSettingsWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'GlobalSettingId', 'globalsettings', 'GlobalSettings', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadGlobalSettingWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'GlobalSettingId', 'globalsetting', 'GlobalSettings', airtableWhere, sortField, false, behaviorSubject);
    }

    public globalsettingsSort(globalsettingA: any, globalsettingB: any) {
        return EapiEndpointBase.defaultSort(globalsettingA, globalsettingB);
    } 





    // HANDLERS FOR: Score
    public score: any = {};
    public scores: any[] = [];
    public scoresById: any = {};
    public score$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public scores$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onScoresChange(): Observable<any> {
        return this.scores$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onScoreChange(): Observable<any> {
        return this.score$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadScores(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'ScoreId', 'scores', 'Scores', '', sortField, true, behaviorSubject);
    }

    public async reloadScoresWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'ScoreId', 'scores', 'Scores', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadScoreWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'ScoreId', 'score', 'Scores', airtableWhere, sortField, false, behaviorSubject);
    }

    public scoresSort(scoreA: any, scoreB: any) {
        return EapiEndpointBase.defaultSort(scoreA, scoreB);
    } 





    // HANDLERS FOR: AILevel
    public ailevel: any = {};
    public ailevels: any[] = [];
    public ailevelsById: any = {};
    public ailevel$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public ailevels$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onAILevelsChange(): Observable<any> {
        return this.ailevels$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onAILevelChange(): Observable<any> {
        return this.ailevel$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadAILevels(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'AILevelId', 'ailevels', 'AILevels', '', sortField, true, behaviorSubject);
    }

    public async reloadAILevelsWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'AILevelId', 'ailevels', 'AILevels', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadAILevelWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'AILevelId', 'ailevel', 'AILevels', airtableWhere, sortField, false, behaviorSubject);
    }

    public ailevelsSort(ailevelA: any, ailevelB: any) {
        return EapiEndpointBase.defaultSort(ailevelA, ailevelB);
    } 





    // HANDLERS FOR: UIElement
    public uielement: any = {};
    public uielements: any[] = [];
    public uielementsById: any = {};
    public uielement$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public uielements$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onUIElementsChange(): Observable<any> {
        return this.uielements$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onUIElementChange(): Observable<any> {
        return this.uielement$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadUIElements(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'UIElementId', 'uielements', 'UIElements', '', sortField, true, behaviorSubject);
    }

    public async reloadUIElementsWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'UIElementId', 'uielements', 'UIElements', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadUIElementWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'UIElementId', 'uielement', 'UIElements', airtableWhere, sortField, false, behaviorSubject);
    }

    public uielementsSort(uielementA: any, uielementB: any) {
        return EapiEndpointBase.defaultSort(uielementA, uielementB);
    } 





    // HANDLERS FOR: Translation
    public translation: any = {};
    public translations: any[] = [];
    public translationsById: any = {};
    public translation$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public translations$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onTranslationsChange(): Observable<any> {
        return this.translations$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onTranslationChange(): Observable<any> {
        return this.translation$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadTranslations(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'TranslationId', 'translations', 'Translations', '', sortField, true, behaviorSubject);
    }

    public async reloadTranslationsWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'TranslationId', 'translations', 'Translations', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadTranslationWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'TranslationId', 'translation', 'Translations', airtableWhere, sortField, false, behaviorSubject);
    }

    public translationsSort(translationA: any, translationB: any) {
        return EapiEndpointBase.defaultSort(translationA, translationB);
    } 





    // HANDLERS FOR: LanguageToken
    public languagetoken: any = {};
    public languagetokens: any[] = [];
    public languagetokensById: any = {};
    public languagetoken$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public languagetokens$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onLanguageTokensChange(): Observable<any> {
        return this.languagetokens$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onLanguageTokenChange(): Observable<any> {
        return this.languagetoken$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadLanguageTokens(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'LanguageTokenId', 'languagetokens', 'LanguageTokens', '', sortField, true, behaviorSubject);
    }

    public async reloadLanguageTokensWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'LanguageTokenId', 'languagetokens', 'LanguageTokens', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadLanguageTokenWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'LanguageTokenId', 'languagetoken', 'LanguageTokens', airtableWhere, sortField, false, behaviorSubject);
    }

    public languagetokensSort(languagetokenA: any, languagetokenB: any) {
        return EapiEndpointBase.defaultSort(languagetokenA, languagetokenB);
    } 





    // HANDLERS FOR: AdditionalResource
    public additionalresource: any = {};
    public additionalresources: any[] = [];
    public additionalresourcesById: any = {};
    public additionalresource$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public additionalresources$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onAdditionalResourcesChange(): Observable<any> {
        return this.additionalresources$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onAdditionalResourceChange(): Observable<any> {
        return this.additionalresource$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadAdditionalResources(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'AdditionalResourceId', 'additionalresources', 'AdditionalResources', '', sortField, true, behaviorSubject);
    }

    public async reloadAdditionalResourcesWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'AdditionalResourceId', 'additionalresources', 'AdditionalResources', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadAdditionalResourceWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'AdditionalResourceId', 'additionalresource', 'AdditionalResources', airtableWhere, sortField, false, behaviorSubject);
    }

    public additionalresourcesSort(additionalresourceA: any, additionalresourceB: any) {
        return EapiEndpointBase.defaultSort(additionalresourceA, additionalresourceB);
    } 





    // HANDLERS FOR: Game
    public game: any = {};
    public games: any[] = [];
    public gamesById: any = {};
    public game$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public games$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onGamesChange(): Observable<any> {
        return this.games$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onGameChange(): Observable<any> {
        return this.game$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadGames(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'GameId', 'games', 'Games', '', sortField, true, behaviorSubject);
    }

    public async reloadGamesWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'GameId', 'games', 'Games', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadGameWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'GameId', 'game', 'Games', airtableWhere, sortField, false, behaviorSubject);
    }

    public gamesSort(gameA: any, gameB: any) {
        return EapiEndpointBase.defaultSort(gameA, gameB);
    } 





    // HANDLERS FOR: Cell
    public cell: any = {};
    public cells: any[] = [];
    public cellsById: any = {};
    public cell$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public cells$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onCellsChange(): Observable<any> {
        return this.cells$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onCellChange(): Observable<any> {
        return this.cell$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadCells(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellId', 'cells', 'Cells', '', sortField, true, behaviorSubject);
    }

    public async reloadCellsWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellId', 'cells', 'Cells', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadCellWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellId', 'cell', 'Cells', airtableWhere, sortField, false, behaviorSubject);
    }

    public cellsSort(cellA: any, cellB: any) {
        return EapiEndpointBase.defaultSort(cellA, cellB);
    } 





    // HANDLERS FOR: CellPattern
    public cellpattern: any = {};
    public cellpatterns: any[] = [];
    public cellpatternsById: any = {};
    public cellpattern$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public cellpatterns$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onCellPatternsChange(): Observable<any> {
        return this.cellpatterns$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onCellPatternChange(): Observable<any> {
        return this.cellpattern$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadCellPatterns(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellPatternId', 'cellpatterns', 'CellPatterns', '', sortField, true, behaviorSubject);
    }

    public async reloadCellPatternsWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellPatternId', 'cellpatterns', 'CellPatterns', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadCellPatternWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellPatternId', 'cellpattern', 'CellPatterns', airtableWhere, sortField, false, behaviorSubject);
    }

    public cellpatternsSort(cellpatternA: any, cellpatternB: any) {
        return EapiEndpointBase.defaultSort(cellpatternA, cellpatternB);
    } 





    // HANDLERS FOR: User
    public user: any = {};
    public users: any[] = [];
    public usersById: any = {};
    public user$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public users$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onUsersChange(): Observable<any> {
        return this.users$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onUserChange(): Observable<any> {
        return this.user$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadUsers(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'UserId', 'users', 'Users', '', sortField, true, behaviorSubject);
    }

    public async reloadUsersWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'UserId', 'users', 'Users', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadUserWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'UserId', 'user', 'Users', airtableWhere, sortField, false, behaviorSubject);
    }

    public usersSort(userA: any, userB: any) {
        return EapiEndpointBase.defaultSort(userA, userB);
    } 





    // HANDLERS FOR: CellPatternCell
    public cellpatterncell: any = {};
    public cellpatterncells: any[] = [];
    public cellpatterncellsById: any = {};
    public cellpatterncell$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public cellpatterncells$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onCellPatternCellsChange(): Observable<any> {
        return this.cellpatterncells$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onCellPatternCellChange(): Observable<any> {
        return this.cellpatterncell$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadCellPatternCells(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellPatternCellId', 'cellpatterncells', 'CellPatternCells', '', sortField, true, behaviorSubject);
    }

    public async reloadCellPatternCellsWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellPatternCellId', 'cellpatterncells', 'CellPatternCells', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadCellPatternCellWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellPatternCellId', 'cellpatterncell', 'CellPatternCells', airtableWhere, sortField, false, behaviorSubject);
    }

    public cellpatterncellsSort(cellpatterncellA: any, cellpatterncellB: any) {
        return EapiEndpointBase.defaultSort(cellpatterncellA, cellpatterncellB);
    } 





    // HANDLERS FOR: TargetPlatform
    public targetplatform: any = {};
    public targetplatforms: any[] = [];
    public targetplatformsById: any = {};
    public targetplatform$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public targetplatforms$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onTargetPlatformsChange(): Observable<any> {
        return this.targetplatforms$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onTargetPlatformChange(): Observable<any> {
        return this.targetplatform$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadTargetPlatforms(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'TargetPlatformId', 'targetplatforms', 'TargetPlatforms', '', sortField, true, behaviorSubject);
    }

    public async reloadTargetPlatformsWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'TargetPlatformId', 'targetplatforms', 'TargetPlatforms', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadTargetPlatformWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'TargetPlatformId', 'targetplatform', 'TargetPlatforms', airtableWhere, sortField, false, behaviorSubject);
    }

    public targetplatformsSort(targetplatformA: any, targetplatformB: any) {
        return EapiEndpointBase.defaultSort(targetplatformA, targetplatformB);
    } 





    // HANDLERS FOR: AIStrategy
    public aistrategy: any = {};
    public aistrategies: any[] = [];
    public aistrategiesById: any = {};
    public aistrategy$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public aistrategies$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onAIStrategiesChange(): Observable<any> {
        return this.aistrategies$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onAIStrategyChange(): Observable<any> {
        return this.aistrategy$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadAIStrategies(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'AIStrategyId', 'aistrategies', 'AIStrategies', '', sortField, true, behaviorSubject);
    }

    public async reloadAIStrategiesWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'AIStrategyId', 'aistrategies', 'AIStrategies', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadAIStrategyWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'AIStrategyId', 'aistrategy', 'AIStrategies', airtableWhere, sortField, false, behaviorSubject);
    }

    public aistrategiesSort(aistrategyA: any, aistrategyB: any) {
        return EapiEndpointBase.defaultSort(aistrategyA, aistrategyB);
    } 





    // HANDLERS FOR: CellState
    public cellstate: any = {};
    public cellstates: any[] = [];
    public cellstatesById: any = {};
    public cellstate$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public cellstates$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onCellStatesChange(): Observable<any> {
        return this.cellstates$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onCellStateChange(): Observable<any> {
        return this.cellstate$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadCellStates(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellStateId', 'cellstates', 'CellStates', '', sortField, true, behaviorSubject);
    }

    public async reloadCellStatesWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellStateId', 'cellstates', 'CellStates', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadCellStateWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellStateId', 'cellstate', 'CellStates', airtableWhere, sortField, false, behaviorSubject);
    }

    public cellstatesSort(cellstateA: any, cellstateB: any) {
        return EapiEndpointBase.defaultSort(cellstateA, cellstateB);
    } 





    // HANDLERS FOR: CellPatternTranslation
    public cellpatterntranslation: any = {};
    public cellpatterntranslations: any[] = [];
    public cellpatterntranslationsById: any = {};
    public cellpatterntranslation$: BehaviorSubject<any[]> = new BehaviorSubject(null);
    public cellpatterntranslations$: BehaviorSubject<any[]> = new BehaviorSubject(null);

    public onCellPatternTranslationsChange(): Observable<any> {
        return this.cellpatterntranslations$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public onCellPatternTranslationChange(): Observable<any> {
        return this.cellpatterntranslation$
            .pipe(
                filter(value => !!value),
                share(),
            );
    }

    public async reloadCellPatternTranslations(smqUser: any = null, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellPatternTranslationId', 'cellpatterntranslations', 'CellPatternTranslations', '', sortField, true, behaviorSubject);
    }

    public async reloadCellPatternTranslationsWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellPatternTranslationId', 'cellpatterntranslations', 'CellPatternTranslations', airtableWhere, sortField, true, behaviorSubject);
    }

    public async reloadCellPatternTranslationWhere(smqUser: any = null, airtableWhere : string, sortField : string = '', behaviorSubject?: BehaviorSubject<any>) {
        return this.doReload(smqUser, 'CellPatternTranslationId', 'cellpatterntranslation', 'CellPatternTranslations', airtableWhere, sortField, false, behaviorSubject);
    }

    public cellpatterntranslationsSort(cellpatterntranslationA: any, cellpatterntranslationB: any) {
        return EapiEndpointBase.defaultSort(cellpatterntranslationA, cellpatterntranslationB);
    } 

}
