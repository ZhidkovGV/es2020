import { bigIntExample } from './bigint.js';
import { nullishExample } from './nullish-operator.js';
import { dynamicImport } from './dynamic-import/dynamic-import.js';
import { globalThisExample } from './global-this/global-this.js';
import { ClassWithPrivateProperty } from './private-class-members.js';
import { SomeClass } from './class-members.js';
import { allMethodExample,  matchAllExample} from './match-all.js';
import { numericLiteralExample } from './numeric-literals.js';
import { promiseAllSettledExample, promiseAllExample } from './all-settled.js';
import { optionalChainExample, opionalChainWithNullish } from './optional-chain.js';

Object.assign(globalThis, {
    bigIntExample,
    nullishExample,
    dynamicImport,
    globalThisExample,
    ClassWithPrivateProperty,
    SomeClass,
    allMethodExample,
    matchAllExample,
    numericLiteralExample,
    promiseAllExample,
    promiseAllSettledExample,
    opionalChainWithNullish,
    optionalChainExample
})