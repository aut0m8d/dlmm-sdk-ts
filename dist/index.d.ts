import * as _solana_web3_js from '@solana/web3.js';
import { PublicKey, TransactionInstruction, Connection, Transaction, Cluster } from '@solana/web3.js';
import { BN, Program, IdlAccounts, ProgramAccount, IdlTypes, EventParser } from '@coral-xyz/anchor';
import Decimal from 'decimal.js';

type LbClmm = {
    "version": "0.5.0";
    "name": "lb_clmm";
    "constants": [
        {
            "name": "BASIS_POINT_MAX";
            "type": "i32";
            "value": "10000";
        },
        {
            "name": "MAX_BIN_PER_ARRAY";
            "type": {
                "defined": "usize";
            };
            "value": "70";
        },
        {
            "name": "MAX_BIN_PER_POSITION";
            "type": {
                "defined": "usize";
            };
            "value": "70";
        },
        {
            "name": "MIN_BIN_ID";
            "type": "i32";
            "value": "- 443636";
        },
        {
            "name": "MAX_BIN_ID";
            "type": "i32";
            "value": "443636";
        },
        {
            "name": "MAX_FEE_RATE";
            "type": "u64";
            "value": "100_000_000";
        },
        {
            "name": "FEE_PRECISION";
            "type": "u64";
            "value": "1_000_000_000";
        },
        {
            "name": "MAX_PROTOCOL_SHARE";
            "type": "u16";
            "value": "2_500";
        },
        {
            "name": "HOST_FEE_BPS";
            "type": "u16";
            "value": "2_000";
        },
        {
            "name": "NUM_REWARDS";
            "type": {
                "defined": "usize";
            };
            "value": "2";
        },
        {
            "name": "MIN_REWARD_DURATION";
            "type": "u64";
            "value": "1";
        },
        {
            "name": "MAX_REWARD_DURATION";
            "type": "u64";
            "value": "31536000";
        },
        {
            "name": "EXTENSION_BINARRAY_BITMAP_SIZE";
            "type": {
                "defined": "usize";
            };
            "value": "12";
        },
        {
            "name": "BIN_ARRAY_BITMAP_SIZE";
            "type": "i32";
            "value": "512";
        },
        {
            "name": "MAX_REWARD_BIN_SPLIT";
            "type": {
                "defined": "usize";
            };
            "value": "15";
        },
        {
            "name": "BIN_ARRAY";
            "type": "bytes";
            "value": "[98, 105, 110, 95, 97, 114, 114, 97, 121]";
        },
        {
            "name": "ORACLE";
            "type": "bytes";
            "value": "[111, 114, 97, 99, 108, 101]";
        },
        {
            "name": "BIN_ARRAY_BITMAP_SEED";
            "type": "bytes";
            "value": "[98, 105, 116, 109, 97, 112]";
        },
        {
            "name": "PRESET_PARAMETER";
            "type": "bytes";
            "value": "[112, 114, 101, 115, 101, 116, 95, 112, 97, 114, 97, 109, 101, 116, 101, 114]";
        },
        {
            "name": "PERMISSION";
            "type": "bytes";
            "value": "[112, 101, 114, 109, 105, 115, 115, 105, 111, 110]";
        },
        {
            "name": "POSITION";
            "type": "bytes";
            "value": "[112, 111, 115, 105, 116, 105, 111, 110]";
        }
    ];
    "instructions": [
        {
            "name": "initializeLbPair";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayBitmapExtension";
                    "isMut": true;
                    "isSigner": false;
                    "isOptional": true;
                },
                {
                    "name": "tokenMintX";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenMintY";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "reserveX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "oracle";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "presetParameter";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "funder";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "activeId";
                    "type": "i32";
                },
                {
                    "name": "binStep";
                    "type": "u16";
                }
            ];
        },
        {
            "name": "initializePermissionLbPair";
            "accounts": [
                {
                    "name": "base";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayBitmapExtension";
                    "isMut": true;
                    "isSigner": false;
                    "isOptional": true;
                },
                {
                    "name": "tokenMintX";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenMintY";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "reserveX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "oracle";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "presetParameter";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "admin";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "activeId";
                    "type": "i32";
                },
                {
                    "name": "binStep";
                    "type": "u16";
                }
            ];
        },
        {
            "name": "initializeBinArrayBitmapExtension";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "binArrayBitmapExtension";
                    "isMut": true;
                    "isSigner": false;
                    "docs": [
                        "Initialize an account to store if a bin array is initialized."
                    ];
                },
                {
                    "name": "funder";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [];
        },
        {
            "name": "initializeBinArray";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "binArray";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "funder";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "index";
                    "type": "i64";
                }
            ];
        },
        {
            "name": "addLiquidity";
            "accounts": [
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayBitmapExtension";
                    "isMut": true;
                    "isSigner": false;
                    "isOptional": true;
                },
                {
                    "name": "userTokenX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "userTokenY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenXMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "binArrayLower";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayUpper";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "sender";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "tokenXProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "liquidityParameter";
                    "type": {
                        "defined": "LiquidityParameter";
                    };
                }
            ];
        },
        {
            "name": "addLiquidityByWeight";
            "accounts": [
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayBitmapExtension";
                    "isMut": true;
                    "isSigner": false;
                    "isOptional": true;
                },
                {
                    "name": "userTokenX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "userTokenY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenXMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "binArrayLower";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayUpper";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "sender";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "tokenXProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "liquidityParameter";
                    "type": {
                        "defined": "LiquidityParameterByWeight";
                    };
                }
            ];
        },
        {
            "name": "addLiquidityByStrategy";
            "accounts": [
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayBitmapExtension";
                    "isMut": true;
                    "isSigner": false;
                    "isOptional": true;
                },
                {
                    "name": "userTokenX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "userTokenY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenXMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "binArrayLower";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayUpper";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "sender";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "tokenXProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "liquidityParameter";
                    "type": {
                        "defined": "LiquidityParameterByStrategy";
                    };
                }
            ];
        },
        {
            "name": "addLiquidityByStrategyOneSide";
            "accounts": [
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayBitmapExtension";
                    "isMut": true;
                    "isSigner": false;
                    "isOptional": true;
                },
                {
                    "name": "userToken";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserve";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "binArrayLower";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayUpper";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "sender";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "liquidityParameter";
                    "type": {
                        "defined": "LiquidityParameterByStrategyOneSide";
                    };
                }
            ];
        },
        {
            "name": "addLiquidityOneSide";
            "accounts": [
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayBitmapExtension";
                    "isMut": true;
                    "isSigner": false;
                    "isOptional": true;
                },
                {
                    "name": "userToken";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserve";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "binArrayLower";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayUpper";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "sender";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "liquidityParameter";
                    "type": {
                        "defined": "LiquidityOneSideParameter";
                    };
                }
            ];
        },
        {
            "name": "removeLiquidity";
            "accounts": [
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayBitmapExtension";
                    "isMut": true;
                    "isSigner": false;
                    "isOptional": true;
                },
                {
                    "name": "userTokenX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "userTokenY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenXMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "binArrayLower";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayUpper";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "sender";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "tokenXProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "binLiquidityRemoval";
                    "type": {
                        "vec": {
                            "defined": "BinLiquidityReduction";
                        };
                    };
                }
            ];
        },
        {
            "name": "initializePosition";
            "accounts": [
                {
                    "name": "payer";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "lbPair";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "owner";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "lowerBinId";
                    "type": "i32";
                },
                {
                    "name": "width";
                    "type": "i32";
                }
            ];
        },
        {
            "name": "initializePositionPda";
            "accounts": [
                {
                    "name": "payer";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "base";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "lbPair";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "owner";
                    "isMut": false;
                    "isSigner": true;
                    "docs": [
                        "owner"
                    ];
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "lowerBinId";
                    "type": "i32";
                },
                {
                    "name": "width";
                    "type": "i32";
                }
            ];
        },
        {
            "name": "initializePositionByOperator";
            "accounts": [
                {
                    "name": "payer";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "base";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "lbPair";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "operator";
                    "isMut": false;
                    "isSigner": true;
                    "docs": [
                        "operator"
                    ];
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "lowerBinId";
                    "type": "i32";
                },
                {
                    "name": "width";
                    "type": "i32";
                },
                {
                    "name": "owner";
                    "type": "publicKey";
                }
            ];
        },
        {
            "name": "updatePositionOperator";
            "accounts": [
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "owner";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "operator";
                    "type": "publicKey";
                }
            ];
        },
        {
            "name": "swap";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayBitmapExtension";
                    "isMut": false;
                    "isSigner": false;
                    "isOptional": true;
                },
                {
                    "name": "reserveX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "userTokenIn";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "userTokenOut";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenXMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "oracle";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "hostFeeIn";
                    "isMut": true;
                    "isSigner": false;
                    "isOptional": true;
                },
                {
                    "name": "user";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "tokenXProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "amountIn";
                    "type": "u64";
                },
                {
                    "name": "minAmountOut";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "withdrawProtocolFee";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenXMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "receiverTokenX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "receiverTokenY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "feeOwner";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "tokenXProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYProgram";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "amountX";
                    "type": "u64";
                },
                {
                    "name": "amountY";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "updateFeeOwner";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "newFeeOwner";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "admin";
                    "isMut": false;
                    "isSigner": true;
                }
            ];
            "args": [];
        },
        {
            "name": "initializeReward";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "rewardVault";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "rewardMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "admin";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "rewardIndex";
                    "type": "u64";
                },
                {
                    "name": "rewardDuration";
                    "type": "u64";
                },
                {
                    "name": "funder";
                    "type": "publicKey";
                }
            ];
        },
        {
            "name": "fundReward";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "rewardVault";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "rewardMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "funderTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "funder";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "binArray";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "rewardIndex";
                    "type": "u64";
                },
                {
                    "name": "amount";
                    "type": "u64";
                },
                {
                    "name": "carryForward";
                    "type": "bool";
                }
            ];
        },
        {
            "name": "updateRewardFunder";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "admin";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "rewardIndex";
                    "type": "u64";
                },
                {
                    "name": "newFunder";
                    "type": "publicKey";
                }
            ];
        },
        {
            "name": "updateRewardDuration";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "admin";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "binArray";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "rewardIndex";
                    "type": "u64";
                },
                {
                    "name": "newDuration";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "claimReward";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayLower";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayUpper";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "sender";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "rewardVault";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "rewardMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "userTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "rewardIndex";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "claimFee";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayLower";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayUpper";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "sender";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "reserveX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "userTokenX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "userTokenY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenXMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [];
        },
        {
            "name": "closePosition";
            "accounts": [
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayLower";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayUpper";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "sender";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "rentReceiver";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [];
        },
        {
            "name": "updateFeeParameters";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "admin";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "feeParameter";
                    "type": {
                        "defined": "FeeParameter";
                    };
                }
            ];
        },
        {
            "name": "increaseOracleLength";
            "accounts": [
                {
                    "name": "oracle";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "funder";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "lengthToAdd";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "initializePresetParameter";
            "accounts": [
                {
                    "name": "presetParameter";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "admin";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "ix";
                    "type": {
                        "defined": "InitPresetParametersIx";
                    };
                }
            ];
        },
        {
            "name": "closePresetParameter";
            "accounts": [
                {
                    "name": "presetParameter";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "admin";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "rentReceiver";
                    "isMut": true;
                    "isSigner": false;
                }
            ];
            "args": [];
        },
        {
            "name": "removeAllLiquidity";
            "accounts": [
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayBitmapExtension";
                    "isMut": true;
                    "isSigner": false;
                    "isOptional": true;
                },
                {
                    "name": "userTokenX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "userTokenY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveX";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "reserveY";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenXMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "binArrayLower";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayUpper";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "sender";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "tokenXProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenYProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [];
        },
        {
            "name": "togglePairStatus";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "admin";
                    "isMut": false;
                    "isSigner": true;
                }
            ];
            "args": [];
        },
        {
            "name": "updateWhitelistedWallet";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "admin";
                    "isMut": false;
                    "isSigner": true;
                }
            ];
            "args": [
                {
                    "name": "idx";
                    "type": "u8";
                },
                {
                    "name": "wallet";
                    "type": "publicKey";
                }
            ];
        },
        {
            "name": "migratePosition";
            "accounts": [
                {
                    "name": "positionV2";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "positionV1";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "lbPair";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "binArrayLower";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayUpper";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "owner";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "rentReceiver";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [];
        },
        {
            "name": "migrateBinArray";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [];
        },
        {
            "name": "updateFeesAndRewards";
            "accounts": [
                {
                    "name": "position";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayLower";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "binArrayUpper";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "owner";
                    "isMut": false;
                    "isSigner": true;
                }
            ];
            "args": [];
        },
        {
            "name": "withdrawIneligibleReward";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "rewardVault";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "rewardMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "funderTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "funder";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "binArray";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "rewardIndex";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "setActivationSlot";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "admin";
                    "isMut": true;
                    "isSigner": true;
                }
            ];
            "args": [
                {
                    "name": "activationSlot";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "setMaxSwappedAmount";
            "accounts": [
                {
                    "name": "lbPair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "admin";
                    "isMut": true;
                    "isSigner": true;
                }
            ];
            "args": [
                {
                    "name": "swapCapDeactivateSlot";
                    "type": "u64";
                },
                {
                    "name": "maxSwappedAmount";
                    "type": "u64";
                }
            ];
        }
    ];
    "accounts": [
        {
            "name": "binArrayBitmapExtension";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "lbPair";
                        "type": "publicKey";
                    },
                    {
                        "name": "positiveBinArrayBitmap";
                        "docs": [
                            "Packed initialized bin array state for start_bin_index is positive"
                        ];
                        "type": {
                            "array": [
                                {
                                    "array": [
                                        "u64",
                                        8
                                    ];
                                },
                                12
                            ];
                        };
                    },
                    {
                        "name": "negativeBinArrayBitmap";
                        "docs": [
                            "Packed initialized bin array state for start_bin_index is negative"
                        ];
                        "type": {
                            "array": [
                                {
                                    "array": [
                                        "u64",
                                        8
                                    ];
                                },
                                12
                            ];
                        };
                    }
                ];
            };
        },
        {
            "name": "binArray";
            "docs": [
                "An account to contain a range of bin. For example: Bin 100 <-> 200.",
                "For example:",
                "BinArray index: 0 contains bin 0 <-> 599",
                "index: 2 contains bin 600 <-> 1199, ..."
            ];
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "index";
                        "type": "i64";
                    },
                    {
                        "name": "version";
                        "docs": [
                            "Version of binArray"
                        ];
                        "type": "u8";
                    },
                    {
                        "name": "padding";
                        "type": {
                            "array": [
                                "u8",
                                7
                            ];
                        };
                    },
                    {
                        "name": "lbPair";
                        "type": "publicKey";
                    },
                    {
                        "name": "bins";
                        "type": {
                            "array": [
                                {
                                    "defined": "Bin";
                                },
                                70
                            ];
                        };
                    }
                ];
            };
        },
        {
            "name": "lbPair";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "parameters";
                        "type": {
                            "defined": "StaticParameters";
                        };
                    },
                    {
                        "name": "vParameters";
                        "type": {
                            "defined": "VariableParameters";
                        };
                    },
                    {
                        "name": "bumpSeed";
                        "type": {
                            "array": [
                                "u8",
                                1
                            ];
                        };
                    },
                    {
                        "name": "binStepSeed";
                        "docs": [
                            "Bin step signer seed"
                        ];
                        "type": {
                            "array": [
                                "u8",
                                2
                            ];
                        };
                    },
                    {
                        "name": "pairType";
                        "docs": [
                            "Type of the pair"
                        ];
                        "type": "u8";
                    },
                    {
                        "name": "activeId";
                        "docs": [
                            "Active bin id"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "binStep";
                        "docs": [
                            "Bin step. Represent the price increment / decrement."
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "status";
                        "docs": [
                            "Status of the pair. Check PairStatus enum."
                        ];
                        "type": "u8";
                    },
                    {
                        "name": "padding1";
                        "type": {
                            "array": [
                                "u8",
                                5
                            ];
                        };
                    },
                    {
                        "name": "tokenXMint";
                        "docs": [
                            "Token X mint"
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "tokenYMint";
                        "docs": [
                            "Token Y mint"
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "reserveX";
                        "docs": [
                            "LB token X vault"
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "reserveY";
                        "docs": [
                            "LB token Y vault"
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "protocolFee";
                        "docs": [
                            "Uncollected protocol fee"
                        ];
                        "type": {
                            "defined": "ProtocolFee";
                        };
                    },
                    {
                        "name": "feeOwner";
                        "docs": [
                            "Protocol fee owner,"
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "rewardInfos";
                        "docs": [
                            "Farming reward information"
                        ];
                        "type": {
                            "array": [
                                {
                                    "defined": "RewardInfo";
                                },
                                2
                            ];
                        };
                    },
                    {
                        "name": "oracle";
                        "docs": [
                            "Oracle pubkey"
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "binArrayBitmap";
                        "docs": [
                            "Packed initialized bin array state"
                        ];
                        "type": {
                            "array": [
                                "u64",
                                16
                            ];
                        };
                    },
                    {
                        "name": "lastUpdatedAt";
                        "docs": [
                            "Last time the pool fee parameter was updated"
                        ];
                        "type": "i64";
                    },
                    {
                        "name": "whitelistedWallet";
                        "docs": [
                            "Whitelisted wallet"
                        ];
                        "type": {
                            "array": [
                                "publicKey",
                                2
                            ];
                        };
                    },
                    {
                        "name": "baseKey";
                        "docs": [
                            "Base keypair. Only required for permission pair"
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "activationSlot";
                        "docs": [
                            "Slot to enable the pair. Only available for permission pair."
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "swapCapDeactivateSlot";
                        "docs": [
                            "Last slot until pool remove max_swapped_amount for buying"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "maxSwappedAmount";
                        "docs": [
                            "Max X swapped amount user can swap from y to x between activation_slot and last_slot"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "reserved";
                        "docs": [
                            "Reserved space for future use"
                        ];
                        "type": {
                            "array": [
                                "u8",
                                64
                            ];
                        };
                    }
                ];
            };
        },
        {
            "name": "oracle";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "idx";
                        "docs": [
                            "Index of latest observation slot"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "activeSize";
                        "docs": [
                            "Size of active sample. Active sample is initialized observation."
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "length";
                        "docs": [
                            "Number of observations"
                        ];
                        "type": "u64";
                    }
                ];
            };
        },
        {
            "name": "position";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "lbPair";
                        "docs": [
                            "The LB pair of this position"
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "owner";
                        "docs": [
                            "Owner of the position. Client rely on this to to fetch their positions."
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "liquidityShares";
                        "docs": [
                            "Liquidity shares of this position in bins (lower_bin_id <-> upper_bin_id). This is the same as LP concept."
                        ];
                        "type": {
                            "array": [
                                "u64",
                                70
                            ];
                        };
                    },
                    {
                        "name": "rewardInfos";
                        "docs": [
                            "Farming reward information"
                        ];
                        "type": {
                            "array": [
                                {
                                    "defined": "UserRewardInfo";
                                },
                                70
                            ];
                        };
                    },
                    {
                        "name": "feeInfos";
                        "docs": [
                            "Swap fee to claim information"
                        ];
                        "type": {
                            "array": [
                                {
                                    "defined": "FeeInfo";
                                },
                                70
                            ];
                        };
                    },
                    {
                        "name": "lowerBinId";
                        "docs": [
                            "Lower bin ID"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "upperBinId";
                        "docs": [
                            "Upper bin ID"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "lastUpdatedAt";
                        "docs": [
                            "Last updated timestamp"
                        ];
                        "type": "i64";
                    },
                    {
                        "name": "totalClaimedFeeXAmount";
                        "docs": [
                            "Total claimed token fee X"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "totalClaimedFeeYAmount";
                        "docs": [
                            "Total claimed token fee Y"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "totalClaimedRewards";
                        "docs": [
                            "Total claimed rewards"
                        ];
                        "type": {
                            "array": [
                                "u64",
                                2
                            ];
                        };
                    },
                    {
                        "name": "reserved";
                        "docs": [
                            "Reserved space for future use"
                        ];
                        "type": {
                            "array": [
                                "u8",
                                160
                            ];
                        };
                    }
                ];
            };
        },
        {
            "name": "positionV2";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "lbPair";
                        "docs": [
                            "The LB pair of this position"
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "owner";
                        "docs": [
                            "Owner of the position. Client rely on this to to fetch their positions."
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "liquidityShares";
                        "docs": [
                            "Liquidity shares of this position in bins (lower_bin_id <-> upper_bin_id). This is the same as LP concept."
                        ];
                        "type": {
                            "array": [
                                "u128",
                                70
                            ];
                        };
                    },
                    {
                        "name": "rewardInfos";
                        "docs": [
                            "Farming reward information"
                        ];
                        "type": {
                            "array": [
                                {
                                    "defined": "UserRewardInfo";
                                },
                                70
                            ];
                        };
                    },
                    {
                        "name": "feeInfos";
                        "docs": [
                            "Swap fee to claim information"
                        ];
                        "type": {
                            "array": [
                                {
                                    "defined": "FeeInfo";
                                },
                                70
                            ];
                        };
                    },
                    {
                        "name": "lowerBinId";
                        "docs": [
                            "Lower bin ID"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "upperBinId";
                        "docs": [
                            "Upper bin ID"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "lastUpdatedAt";
                        "docs": [
                            "Last updated timestamp"
                        ];
                        "type": "i64";
                    },
                    {
                        "name": "totalClaimedFeeXAmount";
                        "docs": [
                            "Total claimed token fee X"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "totalClaimedFeeYAmount";
                        "docs": [
                            "Total claimed token fee Y"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "totalClaimedRewards";
                        "docs": [
                            "Total claimed rewards"
                        ];
                        "type": {
                            "array": [
                                "u64",
                                2
                            ];
                        };
                    },
                    {
                        "name": "operator";
                        "docs": [
                            "Operator of position"
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "reserved";
                        "docs": [
                            "Reserved space for future use"
                        ];
                        "type": {
                            "array": [
                                "u8",
                                128
                            ];
                        };
                    }
                ];
            };
        },
        {
            "name": "presetParameter";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "binStep";
                        "docs": [
                            "Bin step. Represent the price increment / decrement."
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "baseFactor";
                        "docs": [
                            "Used for base fee calculation. base_fee_rate = base_factor * bin_step"
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "filterPeriod";
                        "docs": [
                            "Filter period determine high frequency trading time window."
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "decayPeriod";
                        "docs": [
                            "Decay period determine when the volatile fee start decay / decrease."
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "reductionFactor";
                        "docs": [
                            "Reduction factor controls the volatile fee rate decrement rate."
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "variableFeeControl";
                        "docs": [
                            "Used to scale the variable fee component depending on the dynamic of the market"
                        ];
                        "type": "u32";
                    },
                    {
                        "name": "maxVolatilityAccumulator";
                        "docs": [
                            "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate."
                        ];
                        "type": "u32";
                    },
                    {
                        "name": "minBinId";
                        "docs": [
                            "Min bin id supported by the pool based on the configured bin step."
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "maxBinId";
                        "docs": [
                            "Max bin id supported by the pool based on the configured bin step."
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "protocolShare";
                        "docs": [
                            "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
                        ];
                        "type": "u16";
                    }
                ];
            };
        }
    ];
    "types": [
        {
            "name": "LiquidityParameterByStrategyOneSide";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "amount";
                        "docs": [
                            "Amount of X token or Y token to deposit"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "activeId";
                        "docs": [
                            "Active bin that integrator observe off-chain"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "maxActiveBinSlippage";
                        "docs": [
                            "max active bin slippage allowed"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "strategyParameters";
                        "docs": [
                            "strategy parameters"
                        ];
                        "type": {
                            "defined": "StrategyParameters";
                        };
                    }
                ];
            };
        },
        {
            "name": "LiquidityParameterByStrategy";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "amountX";
                        "docs": [
                            "Amount of X token to deposit"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "amountY";
                        "docs": [
                            "Amount of Y token to deposit"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "activeId";
                        "docs": [
                            "Active bin that integrator observe off-chain"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "maxActiveBinSlippage";
                        "docs": [
                            "max active bin slippage allowed"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "strategyParameters";
                        "docs": [
                            "strategy parameters"
                        ];
                        "type": {
                            "defined": "StrategyParameters";
                        };
                    }
                ];
            };
        },
        {
            "name": "StrategyParameters";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "minBinId";
                        "docs": [
                            "min bin id"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "maxBinId";
                        "docs": [
                            "max bin id"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "strategyType";
                        "docs": [
                            "strategy type"
                        ];
                        "type": {
                            "defined": "StrategyType";
                        };
                    },
                    {
                        "name": "parameteres";
                        "docs": [
                            "parameters"
                        ];
                        "type": {
                            "array": [
                                "u8",
                                64
                            ];
                        };
                    }
                ];
            };
        },
        {
            "name": "LiquidityOneSideParameter";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "amount";
                        "docs": [
                            "Amount of X token or Y token to deposit"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "activeId";
                        "docs": [
                            "Active bin that integrator observe off-chain"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "maxActiveBinSlippage";
                        "docs": [
                            "max active bin slippage allowed"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "binLiquidityDist";
                        "docs": [
                            "Liquidity distribution to each bins"
                        ];
                        "type": {
                            "vec": {
                                "defined": "BinLiquidityDistributionByWeight";
                            };
                        };
                    }
                ];
            };
        },
        {
            "name": "BinLiquidityDistributionByWeight";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "binId";
                        "docs": [
                            "Define the bin ID wish to deposit to."
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "weight";
                        "docs": [
                            "weight of liquidity distributed for this bin id"
                        ];
                        "type": "u16";
                    }
                ];
            };
        },
        {
            "name": "LiquidityParameterByWeight";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "amountX";
                        "docs": [
                            "Amount of X token to deposit"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "amountY";
                        "docs": [
                            "Amount of Y token to deposit"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "activeId";
                        "docs": [
                            "Active bin that integrator observe off-chain"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "maxActiveBinSlippage";
                        "docs": [
                            "max active bin slippage allowed"
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "binLiquidityDist";
                        "docs": [
                            "Liquidity distribution to each bins"
                        ];
                        "type": {
                            "vec": {
                                "defined": "BinLiquidityDistributionByWeight";
                            };
                        };
                    }
                ];
            };
        },
        {
            "name": "BinLiquidityDistribution";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "binId";
                        "docs": [
                            "Define the bin ID wish to deposit to."
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "distributionX";
                        "docs": [
                            "DistributionX (or distributionY) is the percentages of amountX (or amountY) you want to add to each bin."
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "distributionY";
                        "docs": [
                            "DistributionX (or distributionY) is the percentages of amountX (or amountY) you want to add to each bin."
                        ];
                        "type": "u16";
                    }
                ];
            };
        },
        {
            "name": "LiquidityParameter";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "amountX";
                        "docs": [
                            "Amount of X token to deposit"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "amountY";
                        "docs": [
                            "Amount of Y token to deposit"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "binLiquidityDist";
                        "docs": [
                            "Liquidity distribution to each bins"
                        ];
                        "type": {
                            "vec": {
                                "defined": "BinLiquidityDistribution";
                            };
                        };
                    }
                ];
            };
        },
        {
            "name": "InitPresetParametersIx";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "binStep";
                        "docs": [
                            "Bin step. Represent the price increment / decrement."
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "baseFactor";
                        "docs": [
                            "Used for base fee calculation. base_fee_rate = base_factor * bin_step"
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "filterPeriod";
                        "docs": [
                            "Filter period determine high frequency trading time window."
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "decayPeriod";
                        "docs": [
                            "Decay period determine when the volatile fee start decay / decrease."
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "reductionFactor";
                        "docs": [
                            "Reduction factor controls the volatile fee rate decrement rate."
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "variableFeeControl";
                        "docs": [
                            "Used to scale the variable fee component depending on the dynamic of the market"
                        ];
                        "type": "u32";
                    },
                    {
                        "name": "maxVolatilityAccumulator";
                        "docs": [
                            "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate."
                        ];
                        "type": "u32";
                    },
                    {
                        "name": "minBinId";
                        "docs": [
                            "Min bin id supported by the pool based on the configured bin step."
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "maxBinId";
                        "docs": [
                            "Max bin id supported by the pool based on the configured bin step."
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "protocolShare";
                        "docs": [
                            "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
                        ];
                        "type": "u16";
                    }
                ];
            };
        },
        {
            "name": "BinLiquidityReduction";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "binId";
                        "type": "i32";
                    },
                    {
                        "name": "bpsToRemove";
                        "type": "u16";
                    }
                ];
            };
        },
        {
            "name": "FeeParameter";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "protocolShare";
                        "docs": [
                            "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "baseFactor";
                        "docs": [
                            "Base factor for base fee rate"
                        ];
                        "type": "u16";
                    }
                ];
            };
        },
        {
            "name": "Bin";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "amountX";
                        "docs": [
                            "Amount of token X in the bin. This already excluded protocol fees."
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "amountY";
                        "docs": [
                            "Amount of token Y in the bin. This already excluded protocol fees."
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "price";
                        "docs": [
                            "Bin price"
                        ];
                        "type": "u128";
                    },
                    {
                        "name": "liquiditySupply";
                        "docs": [
                            "Liquidities of the bin. This is the same as LP mint supply. q-number"
                        ];
                        "type": "u128";
                    },
                    {
                        "name": "rewardPerTokenStored";
                        "docs": [
                            "reward_a_per_token_stored"
                        ];
                        "type": {
                            "array": [
                                "u128",
                                2
                            ];
                        };
                    },
                    {
                        "name": "feeAmountXPerTokenStored";
                        "docs": [
                            "Swap fee amount of token X per liquidity deposited."
                        ];
                        "type": "u128";
                    },
                    {
                        "name": "feeAmountYPerTokenStored";
                        "docs": [
                            "Swap fee amount of token Y per liquidity deposited."
                        ];
                        "type": "u128";
                    },
                    {
                        "name": "amountXIn";
                        "docs": [
                            "Total token X swap into the bin. Only used for tracking purpose."
                        ];
                        "type": "u128";
                    },
                    {
                        "name": "amountYIn";
                        "docs": [
                            "Total token Y swap into he bin. Only used for tracking purpose."
                        ];
                        "type": "u128";
                    }
                ];
            };
        },
        {
            "name": "ProtocolFee";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "amountX";
                        "type": "u64";
                    },
                    {
                        "name": "amountY";
                        "type": "u64";
                    }
                ];
            };
        },
        {
            "name": "RewardInfo";
            "docs": [
                "Stores the state relevant for tracking liquidity mining rewards"
            ];
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "mint";
                        "docs": [
                            "Reward token mint."
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "vault";
                        "docs": [
                            "Reward vault token account."
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "funder";
                        "docs": [
                            "Authority account that allows to fund rewards"
                        ];
                        "type": "publicKey";
                    },
                    {
                        "name": "rewardDuration";
                        "docs": [
                            "TODO check whether we need to store it in pool"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "rewardDurationEnd";
                        "docs": [
                            "TODO check whether we need to store it in pool"
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "rewardRate";
                        "docs": [
                            "TODO check whether we need to store it in pool"
                        ];
                        "type": "u128";
                    },
                    {
                        "name": "lastUpdateTime";
                        "docs": [
                            "The last time reward states were updated."
                        ];
                        "type": "u64";
                    },
                    {
                        "name": "cumulativeSecondsWithEmptyLiquidityReward";
                        "docs": [
                            "Accumulated seconds where when farm distribute rewards, but the bin is empty. The reward will be accumulated for next reward time window."
                        ];
                        "type": "u64";
                    }
                ];
            };
        },
        {
            "name": "Observation";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "cumulativeActiveBinId";
                        "docs": [
                            "Cumulative active bin ID"
                        ];
                        "type": "i128";
                    },
                    {
                        "name": "createdAt";
                        "docs": [
                            "Observation sample created timestamp"
                        ];
                        "type": "i64";
                    },
                    {
                        "name": "lastUpdatedAt";
                        "docs": [
                            "Observation sample last updated timestamp"
                        ];
                        "type": "i64";
                    }
                ];
            };
        },
        {
            "name": "StaticParameters";
            "docs": [
                "Parameter that set by the protocol"
            ];
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "baseFactor";
                        "docs": [
                            "Used for base fee calculation. base_fee_rate = base_factor * bin_step"
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "filterPeriod";
                        "docs": [
                            "Filter period determine high frequency trading time window."
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "decayPeriod";
                        "docs": [
                            "Decay period determine when the volatile fee start decay / decrease."
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "reductionFactor";
                        "docs": [
                            "Reduction factor controls the volatile fee rate decrement rate."
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "variableFeeControl";
                        "docs": [
                            "Used to scale the variable fee component depending on the dynamic of the market"
                        ];
                        "type": "u32";
                    },
                    {
                        "name": "maxVolatilityAccumulator";
                        "docs": [
                            "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate."
                        ];
                        "type": "u32";
                    },
                    {
                        "name": "minBinId";
                        "docs": [
                            "Min bin id supported by the pool based on the configured bin step."
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "maxBinId";
                        "docs": [
                            "Max bin id supported by the pool based on the configured bin step."
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "protocolShare";
                        "docs": [
                            "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
                        ];
                        "type": "u16";
                    },
                    {
                        "name": "padding";
                        "docs": [
                            "Padding for bytemuck safe alignment"
                        ];
                        "type": {
                            "array": [
                                "u8",
                                6
                            ];
                        };
                    }
                ];
            };
        },
        {
            "name": "VariableParameters";
            "docs": [
                "Parameters that changes based on dynamic of the market"
            ];
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "volatilityAccumulator";
                        "docs": [
                            "Volatility accumulator measure the number of bin crossed since reference bin ID. Normally (without filter period taken into consideration), reference bin ID is the active bin of last swap.",
                            "It affects the variable fee rate"
                        ];
                        "type": "u32";
                    },
                    {
                        "name": "volatilityReference";
                        "docs": [
                            "Volatility reference is decayed volatility accumulator. It is always <= volatility_accumulator"
                        ];
                        "type": "u32";
                    },
                    {
                        "name": "indexReference";
                        "docs": [
                            "Active bin id of last swap."
                        ];
                        "type": "i32";
                    },
                    {
                        "name": "padding";
                        "docs": [
                            "Padding for bytemuck safe alignment"
                        ];
                        "type": {
                            "array": [
                                "u8",
                                4
                            ];
                        };
                    },
                    {
                        "name": "lastUpdateTimestamp";
                        "docs": [
                            "Last timestamp the variable parameters was updated"
                        ];
                        "type": "i64";
                    },
                    {
                        "name": "padding1";
                        "docs": [
                            "Padding for bytemuck safe alignment"
                        ];
                        "type": {
                            "array": [
                                "u8",
                                8
                            ];
                        };
                    }
                ];
            };
        },
        {
            "name": "FeeInfo";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "feeXPerTokenComplete";
                        "type": "u128";
                    },
                    {
                        "name": "feeYPerTokenComplete";
                        "type": "u128";
                    },
                    {
                        "name": "feeXPending";
                        "type": "u64";
                    },
                    {
                        "name": "feeYPending";
                        "type": "u64";
                    }
                ];
            };
        },
        {
            "name": "UserRewardInfo";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "rewardPerTokenCompletes";
                        "type": {
                            "array": [
                                "u128",
                                2
                            ];
                        };
                    },
                    {
                        "name": "rewardPendings";
                        "type": {
                            "array": [
                                "u64",
                                2
                            ];
                        };
                    }
                ];
            };
        },
        {
            "name": "StrategyType";
            "type": {
                "kind": "enum";
                "variants": [
                    {
                        "name": "SpotOneSide";
                    },
                    {
                        "name": "CurveOneSide";
                    },
                    {
                        "name": "BidAskOneSide";
                    },
                    {
                        "name": "SpotBalanced";
                    },
                    {
                        "name": "CurveBalanced";
                    },
                    {
                        "name": "BidAskBalanced";
                    },
                    {
                        "name": "SpotImBalanced";
                    },
                    {
                        "name": "CurveImBalanced";
                    },
                    {
                        "name": "BidAskImBalanced";
                    }
                ];
            };
        },
        {
            "name": "Rounding";
            "type": {
                "kind": "enum";
                "variants": [
                    {
                        "name": "Up";
                    },
                    {
                        "name": "Down";
                    }
                ];
            };
        },
        {
            "name": "LayoutVersion";
            "docs": [
                "Layout version"
            ];
            "type": {
                "kind": "enum";
                "variants": [
                    {
                        "name": "V0";
                    },
                    {
                        "name": "V1";
                    }
                ];
            };
        },
        {
            "name": "PairType";
            "docs": [
                "Type of the Pair. 0 = Permissionless, 1 = Permission. Putting 0 as permissionless for backward compatibility."
            ];
            "type": {
                "kind": "enum";
                "variants": [
                    {
                        "name": "Permissionless";
                    },
                    {
                        "name": "Permission";
                    }
                ];
            };
        },
        {
            "name": "PairStatus";
            "docs": [
                "Pair status. 0 = Enabled, 1 = Disabled. Putting 0 as enabled for backward compatibility."
            ];
            "type": {
                "kind": "enum";
                "variants": [
                    {
                        "name": "Enabled";
                    },
                    {
                        "name": "Disabled";
                    }
                ];
            };
        }
    ];
    "events": [
        {
            "name": "CompositionFee";
            "fields": [
                {
                    "name": "from";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "binId";
                    "type": "i16";
                    "index": false;
                },
                {
                    "name": "tokenXFeeAmount";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "tokenYFeeAmount";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "protocolTokenXFeeAmount";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "protocolTokenYFeeAmount";
                    "type": "u64";
                    "index": false;
                }
            ];
        },
        {
            "name": "AddLiquidity";
            "fields": [
                {
                    "name": "lbPair";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "from";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "position";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "amounts";
                    "type": {
                        "array": [
                            "u64",
                            2
                        ];
                    };
                    "index": false;
                },
                {
                    "name": "activeBinId";
                    "type": "i32";
                    "index": false;
                }
            ];
        },
        {
            "name": "RemoveLiquidity";
            "fields": [
                {
                    "name": "lbPair";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "from";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "position";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "amounts";
                    "type": {
                        "array": [
                            "u64",
                            2
                        ];
                    };
                    "index": false;
                },
                {
                    "name": "activeBinId";
                    "type": "i32";
                    "index": false;
                }
            ];
        },
        {
            "name": "Swap";
            "fields": [
                {
                    "name": "lbPair";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "from";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "startBinId";
                    "type": "i32";
                    "index": false;
                },
                {
                    "name": "endBinId";
                    "type": "i32";
                    "index": false;
                },
                {
                    "name": "amountIn";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "amountOut";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "swapForY";
                    "type": "bool";
                    "index": false;
                },
                {
                    "name": "fee";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "protocolFee";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "feeBps";
                    "type": "u128";
                    "index": false;
                },
                {
                    "name": "hostFee";
                    "type": "u64";
                    "index": false;
                }
            ];
        },
        {
            "name": "ClaimReward";
            "fields": [
                {
                    "name": "lbPair";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "position";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "owner";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "rewardIndex";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "totalReward";
                    "type": "u64";
                    "index": false;
                }
            ];
        },
        {
            "name": "FundReward";
            "fields": [
                {
                    "name": "lbPair";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "funder";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "rewardIndex";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "amount";
                    "type": "u64";
                    "index": false;
                }
            ];
        },
        {
            "name": "InitializeReward";
            "fields": [
                {
                    "name": "lbPair";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "rewardMint";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "funder";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "rewardIndex";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "rewardDuration";
                    "type": "u64";
                    "index": false;
                }
            ];
        },
        {
            "name": "UpdateRewardDuration";
            "fields": [
                {
                    "name": "lbPair";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "rewardIndex";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "oldRewardDuration";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "newRewardDuration";
                    "type": "u64";
                    "index": false;
                }
            ];
        },
        {
            "name": "UpdateRewardFunder";
            "fields": [
                {
                    "name": "lbPair";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "rewardIndex";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "oldFunder";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "newFunder";
                    "type": "publicKey";
                    "index": false;
                }
            ];
        },
        {
            "name": "PositionClose";
            "fields": [
                {
                    "name": "position";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "owner";
                    "type": "publicKey";
                    "index": false;
                }
            ];
        },
        {
            "name": "ClaimFee";
            "fields": [
                {
                    "name": "lbPair";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "position";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "owner";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "feeX";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "feeY";
                    "type": "u64";
                    "index": false;
                }
            ];
        },
        {
            "name": "LbPairCreate";
            "fields": [
                {
                    "name": "lbPair";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "binStep";
                    "type": "u16";
                    "index": false;
                },
                {
                    "name": "tokenX";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "tokenY";
                    "type": "publicKey";
                    "index": false;
                }
            ];
        },
        {
            "name": "PositionCreate";
            "fields": [
                {
                    "name": "lbPair";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "position";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "owner";
                    "type": "publicKey";
                    "index": false;
                }
            ];
        },
        {
            "name": "FeeParameterUpdate";
            "fields": [
                {
                    "name": "lbPair";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "protocolShare";
                    "type": "u16";
                    "index": false;
                },
                {
                    "name": "baseFactor";
                    "type": "u16";
                    "index": false;
                }
            ];
        },
        {
            "name": "IncreaseObservation";
            "fields": [
                {
                    "name": "oracle";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "newObservationLength";
                    "type": "u64";
                    "index": false;
                }
            ];
        },
        {
            "name": "WithdrawIneligibleReward";
            "fields": [
                {
                    "name": "lbPair";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "rewardMint";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "amount";
                    "type": "u64";
                    "index": false;
                }
            ];
        },
        {
            "name": "UpdatePositionOperator";
            "fields": [
                {
                    "name": "position";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "oldOperator";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "newOperator";
                    "type": "publicKey";
                    "index": false;
                }
            ];
        }
    ];
    "errors": [
        {
            "code": 6000;
            "name": "InvalidStartBinIndex";
            "msg": "Invalid start bin index";
        },
        {
            "code": 6001;
            "name": "InvalidBinId";
            "msg": "Invalid bin id";
        },
        {
            "code": 6002;
            "name": "InvalidInput";
            "msg": "Invalid input data";
        },
        {
            "code": 6003;
            "name": "ExceededAmountSlippageTolerance";
            "msg": "Exceeded amount slippage tolerance";
        },
        {
            "code": 6004;
            "name": "ExceededBinSlippageTolerance";
            "msg": "Exceeded bin slippage tolerance";
        },
        {
            "code": 6005;
            "name": "CompositionFactorFlawed";
            "msg": "Composition factor flawed";
        },
        {
            "code": 6006;
            "name": "NonPresetBinStep";
            "msg": "Non preset bin step";
        },
        {
            "code": 6007;
            "name": "ZeroLiquidity";
            "msg": "Zero liquidity";
        },
        {
            "code": 6008;
            "name": "InvalidPosition";
            "msg": "Invalid position";
        },
        {
            "code": 6009;
            "name": "BinArrayNotFound";
            "msg": "Bin array not found";
        },
        {
            "code": 6010;
            "name": "InvalidTokenMint";
            "msg": "Invalid token mint";
        },
        {
            "code": 6011;
            "name": "InvalidAccountForSingleDeposit";
            "msg": "Invalid account for single deposit";
        },
        {
            "code": 6012;
            "name": "PairInsufficientLiquidity";
            "msg": "Pair insufficient liquidity";
        },
        {
            "code": 6013;
            "name": "InvalidFeeOwner";
            "msg": "Invalid fee owner";
        },
        {
            "code": 6014;
            "name": "InvalidFeeWithdrawAmount";
            "msg": "Invalid fee withdraw amount";
        },
        {
            "code": 6015;
            "name": "InvalidAdmin";
            "msg": "Invalid admin";
        },
        {
            "code": 6016;
            "name": "IdenticalFeeOwner";
            "msg": "Identical fee owner";
        },
        {
            "code": 6017;
            "name": "InvalidBps";
            "msg": "Invalid basis point";
        },
        {
            "code": 6018;
            "name": "MathOverflow";
            "msg": "Math operation overflow";
        },
        {
            "code": 6019;
            "name": "TypeCastFailed";
            "msg": "Type cast error";
        },
        {
            "code": 6020;
            "name": "InvalidRewardIndex";
            "msg": "Invalid reward index";
        },
        {
            "code": 6021;
            "name": "InvalidRewardDuration";
            "msg": "Invalid reward duration";
        },
        {
            "code": 6022;
            "name": "RewardInitialized";
            "msg": "Reward already initialized";
        },
        {
            "code": 6023;
            "name": "RewardUninitialized";
            "msg": "Reward not initialized";
        },
        {
            "code": 6024;
            "name": "IdenticalFunder";
            "msg": "Identical funder";
        },
        {
            "code": 6025;
            "name": "RewardCampaignInProgress";
            "msg": "Reward campaign in progress";
        },
        {
            "code": 6026;
            "name": "IdenticalRewardDuration";
            "msg": "Reward duration is the same";
        },
        {
            "code": 6027;
            "name": "InvalidBinArray";
            "msg": "Invalid bin array";
        },
        {
            "code": 6028;
            "name": "NonContinuousBinArrays";
            "msg": "Bin arrays must be continuous";
        },
        {
            "code": 6029;
            "name": "InvalidRewardVault";
            "msg": "Invalid reward vault";
        },
        {
            "code": 6030;
            "name": "NonEmptyPosition";
            "msg": "Position is not empty";
        },
        {
            "code": 6031;
            "name": "UnauthorizedAlphaAccess";
            "msg": "Unauthorized alpha access";
        },
        {
            "code": 6032;
            "name": "InvalidFeeParameter";
            "msg": "Invalid fee parameter";
        },
        {
            "code": 6033;
            "name": "MissingOracle";
            "msg": "Missing oracle account";
        },
        {
            "code": 6034;
            "name": "InsufficientSample";
            "msg": "Insufficient observation sample";
        },
        {
            "code": 6035;
            "name": "InvalidLookupTimestamp";
            "msg": "Invalid lookup timestamp";
        },
        {
            "code": 6036;
            "name": "BitmapExtensionAccountIsNotProvided";
            "msg": "Bitmap extension account is not provided";
        },
        {
            "code": 6037;
            "name": "CannotFindNonZeroLiquidityBinArrayId";
            "msg": "Cannot find non-zero liquidity binArrayId";
        },
        {
            "code": 6038;
            "name": "BinIdOutOfBound";
            "msg": "Bin id out of bound";
        },
        {
            "code": 6039;
            "name": "InsufficientOutAmount";
            "msg": "Insufficient amount in for minimum out";
        },
        {
            "code": 6040;
            "name": "InvalidPositionWidth";
            "msg": "Invalid position width";
        },
        {
            "code": 6041;
            "name": "ExcessiveFeeUpdate";
            "msg": "Excessive fee update";
        },
        {
            "code": 6042;
            "name": "PoolDisabled";
            "msg": "Pool disabled";
        },
        {
            "code": 6043;
            "name": "InvalidPoolType";
            "msg": "Invalid pool type";
        },
        {
            "code": 6044;
            "name": "ExceedMaxWhitelist";
            "msg": "Whitelist for wallet is full";
        },
        {
            "code": 6045;
            "name": "InvalidIndex";
            "msg": "Invalid index";
        },
        {
            "code": 6046;
            "name": "RewardNotEnded";
            "msg": "Reward not ended";
        },
        {
            "code": 6047;
            "name": "MustWithdrawnIneligibleReward";
            "msg": "Must withdraw ineligible reward";
        },
        {
            "code": 6048;
            "name": "InvalidStrategyParameters";
            "msg": "Invalid strategy parameters";
        }
    ];
};
declare const IDL: LbClmm;

interface BinAndAmount {
    binId: number;
    xAmountBpsOfTotal: BN;
    yAmountBpsOfTotal: BN;
}
interface TokenReserve {
    publicKey: PublicKey;
    reserve: PublicKey;
    amount: bigint;
    decimal: number;
}
type ClmmProgram = Program<LbClmm>;
type LbPair = IdlAccounts<LbClmm>["lbPair"];
type LbPairAccount = ProgramAccount<IdlAccounts<LbClmm>["lbPair"]>;
type Bin = IdlTypes<LbClmm>["Bin"];
type BinArray = IdlAccounts<LbClmm>["binArray"];
type BinArrayAccount = ProgramAccount<IdlAccounts<LbClmm>["binArray"]>;
type Position = IdlAccounts<LbClmm>["position"];
type vParameters = IdlAccounts<LbClmm>["lbPair"]["vParameters"];
type sParameters = IdlAccounts<LbClmm>["lbPair"]["parameters"];
type BinLiquidityDistribution = IdlTypes<LbClmm>["BinLiquidityDistribution"];
type BinLiquidityReduction = IdlTypes<LbClmm>["BinLiquidityReduction"];
type BinArrayBitmapExtensionAccount = ProgramAccount<IdlAccounts<LbClmm>["binArrayBitmapExtension"]>;
type BinArrayBitmapExtension = IdlAccounts<LbClmm>["binArrayBitmapExtension"];
type LiquidityParameterByWeight = IdlTypes<LbClmm>["LiquidityParameterByWeight"];
type LiquidityOneSideParameter = IdlTypes<LbClmm>["LiquidityOneSideParameter"];
type LiquidityParameterByStrategy = IdlTypes<LbClmm>["LiquidityParameterByStrategy"];
type LiquidityParameterByStrategyOneSide = IdlTypes<LbClmm>["LiquidityParameterByStrategyOneSide"];
type ProgramStrategyParameter = IdlTypes<LbClmm>["StrategyParameters"];
type ProgramStrategyType = IdlTypes<LbClmm>["StrategyType"];
interface LbPosition {
    publicKey: PublicKey;
    positionData: PositionData;
    version: PositionVersion;
}
interface PositionInfo {
    publicKey: PublicKey;
    lbPair: LbPair;
    tokenX: TokenReserve;
    tokenY: TokenReserve;
    lbPairPositionsData: Array<LbPosition>;
}
interface FeeInfo {
    baseFeeRatePercentage: Decimal;
    maxFeeRatePercentage: Decimal;
    protocolFeePercentage: Decimal;
}
interface FeeInfo {
    baseFeeRatePercentage: Decimal;
    maxFeeRatePercentage: Decimal;
    protocolFeePercentage: Decimal;
}
interface EmissionRate {
    rewardOne: Decimal;
    rewardTwo: Decimal;
}
interface SwapFee {
    feeX: BN;
    feeY: BN;
}
interface LMRewards {
    rewardOne: BN;
    rewardTwo: BN;
}
declare enum PositionVersion {
    V1 = 0,
    V2 = 1
}
declare const Strategy: {
    SpotOneSide: {
        spotOneSide: {};
    };
    CurveOneSide: {
        curveOneSide: {};
    };
    BidAskOneSide: {
        bidAskOneSide: {};
    };
    SpotBalanced: {
        spotBalanced: {};
    };
    CurveBalanced: {
        curveBalanced: {};
    };
    BidAskBalanced: {
        bidAskBalanced: {};
    };
    SpotImBalanced: {
        spotImBalanced: {};
    };
    CurveImBalanced: {
        curveImBalanced: {};
    };
    BidAskImBalanced: {
        bidAskImBalanced: {};
    };
};
declare enum StrategyType {
    SpotOneSide = 0,
    CurveOneSide = 1,
    BidAskOneSide = 2,
    SpotImBalanced = 3,
    CurveImBalanced = 4,
    BidAskImBalanced = 5,
    SpotBalanced = 6,
    CurveBalanced = 7,
    BidAskBalanced = 8
}
interface StrategyParameters {
    maxBinId: number;
    minBinId: number;
    strategyType: StrategyType;
}
interface TQuoteCreatePositionParams {
    strategy: StrategyParameters;
}
interface TInitializePositionAndAddLiquidityParams {
    positionPubKey: PublicKey;
    totalXAmount: BN;
    totalYAmount: BN;
    xYAmountDistribution: BinAndAmount[];
    user: PublicKey;
    slippage?: number;
}
interface TInitializePositionAndAddLiquidityParamsByStrategy {
    positionPubKey: PublicKey;
    totalXAmount: BN;
    totalYAmount: BN;
    strategy: StrategyParameters;
    user: PublicKey;
    slippage?: number;
}
interface BinLiquidity {
    binId: number;
    xAmount: BN;
    yAmount: BN;
    supply: BN;
    version: number;
    price: string;
    pricePerToken: string;
}
interface SwapQuote {
    consumedInAmount: BN;
    outAmount: BN;
    fee: BN;
    protocolFee: BN;
    minOutAmount: BN;
    priceImpact: Decimal;
    binArraysPubkey: any[];
}
interface IAccountsCache {
    binArrays: Map<String, BinArray>;
    lbPair: LbPair;
}
interface PositionBinData {
    binId: number;
    price: string;
    pricePerToken: string;
    binXAmount: string;
    binYAmount: string;
    binLiquidity: string;
    positionLiquidity: string;
    positionXAmount: string;
    positionYAmount: string;
}
interface PositionData {
    totalXAmount: string;
    totalYAmount: string;
    positionBinData: PositionBinData[];
    lastUpdatedAt: BN;
    upperBinId: number;
    lowerBinId: number;
    feeX: BN;
    feeY: BN;
    rewardOne: BN;
    rewardTwo: BN;
}
interface SwapParams {
    /**
     * mint of in token
     */
    inToken: PublicKey;
    /**
     * mint of out token
     */
    outToken: PublicKey;
    /**
     * in token amount
     */
    inAmount: BN;
    /**
     * minimum out with slippage
     */
    minOutAmount: BN;
    /**
     * desired lbPair to swap against
     */
    lbPair: PublicKey;
    /**
     * user
     */
    user: PublicKey;
    binArraysPubkey: PublicKey[];
}
interface GetOrCreateATAResponse {
    ataPubKey: PublicKey;
    ix?: TransactionInstruction;
}
declare enum BitmapType {
    U1024 = 0,
    U512 = 1
}

type Opt = {
    cluster: Cluster | "localhost";
};
declare class DLMM {
    pubkey: PublicKey;
    program: ClmmProgram;
    lbPair: LbPair;
    binArrayBitmapExtension: BinArrayBitmapExtensionAccount | null;
    tokenX: TokenReserve;
    tokenY: TokenReserve;
    private opt?;
    constructor(pubkey: PublicKey, program: ClmmProgram, lbPair: LbPair, binArrayBitmapExtension: BinArrayBitmapExtensionAccount | null, tokenX: TokenReserve, tokenY: TokenReserve, opt?: Opt);
    /** Static public method */
    /**
     * The function `getLbPairs` retrieves a list of LB pair accounts using a connection and optional
     * parameters.
     * @param {Connection} connection - The `connection` parameter is an instance of the `Connection`
     * class, which represents the connection to the Solana blockchain network.
     * @param {Opt} [opt] - The `opt` parameter is an optional object that contains additional options
     * for the function. It can have the following properties:
     * @returns The function `getLbPairs` returns a Promise that resolves to an array of
     * `LbPairAccount` objects.
     */
    static getLbPairs(connection: Connection, opt?: Opt): Promise<LbPairAccount[]>;
    /**
     * The `create` function is a static method that creates a new instance of the `DLMM` class
     * @param {Connection} connection - The `connection` parameter is an instance of the `Connection`
     * class, which represents the connection to the Solana blockchain network.
     * @param {PublicKey} dlmm - The PublicKey of LB Pair.
     * @param {Opt} [opt] - The `opt` parameter is an optional object that can contain additional options
     * for the `create` function. It has the following properties:
     * @returns The `create` function returns a `Promise` that resolves to a `DLMM` object.
     */
    static create(connection: Connection, dlmm: PublicKey, opt?: Opt): Promise<DLMM>;
    /**
     * Similar to `create` function, but it accept multiple lbPairs to be initialized.
     * @param {Connection} connection - The `connection` parameter is an instance of the `Connection`
     * class, which represents the connection to the Solana blockchain network.
     * @param dlmmList - An Array of PublicKey of LB Pairs.
     * @param {Opt} [opt] - An optional parameter of type `Opt`.
     * @returns The function `createMultiple` returns a Promise that resolves to an array of `DLMM`
     * objects.
     */
    static createMultiple(connection: Connection, dlmmList: Array<PublicKey>, opt?: Opt): Promise<DLMM[]>;
    /**
     * The function `getAllLbPairPositionsByUser` retrieves all liquidity pool pair positions for a given
     * user.
     * @param {Connection} connection - The `connection` parameter is an instance of the `Connection`
     * class, which represents the connection to the Solana blockchain.
     * @param {PublicKey} userPubKey - The user's wallet public key.
     * @param {Opt} [opt] - An optional object that contains additional options for the function.
     * @returns The function `getAllLbPairPositionsByUser` returns a `Promise` that resolves to a `Map`
     * object. The `Map` object contains key-value pairs, where the key is a string representing the LB
     * Pair account, and the value is an object of PositionInfo
     */
    static getAllLbPairPositionsByUser(connection: Connection, userPubKey: PublicKey, opt?: Opt): Promise<Map<string, PositionInfo>>;
    static migratePosition(connection: Connection, positions: PublicKey[], newPositions: PublicKey[], walletPubkey: PublicKey, opt?: Opt): Promise<Transaction[]>;
    /** Public methods */
    static createLbPair(connection: Connection, funder: PublicKey, tokenX: PublicKey, tokenY: PublicKey, activeId: BN, binStep: BN, opt?: Opt): Promise<Transaction>;
    /**
     * The function `refetchStates` retrieves and updates various states and data related to bin arrays
     * and lb pairs.
     */
    refetchStates(): Promise<void>;
    /**
     * The function `getBinArrays` returns an array of `BinArrayAccount` objects
     * @returns a Promise that resolves to an array of BinArrayAccount objects.
     */
    getBinArrays(): Promise<BinArrayAccount[]>;
    /**
     * The function `getBinArrayAroundActiveBin` retrieves a specified number of `BinArrayAccount`
     * objects from the blockchain, based on the active bin and its surrounding bin arrays.
     * @param
     *    swapForY - The `swapForY` parameter is a boolean value that indicates whether the swap is using quote token as input.
     *    [count=4] - The `count` parameter is the number of bin arrays to retrieve on left and right respectively. By default, it is set to 4.
     * @returns an array of `BinArrayAccount` objects.
     */
    getBinArrayForSwap(swapForY: any, count?: number): Promise<BinArrayAccount[]>;
    /**
     * The function `getFeeInfo` calculates and returns the base fee rate percentage, maximum fee rate
     * percentage, and protocol fee percentage.
     * @returns an object of type `FeeInfo` with the following properties: baseFeeRatePercentage, maxFeeRatePercentage, and protocolFeePercentage.
     */
    getFeeInfo(): FeeInfo;
    /**
     * The function calculates and returns a dynamic fee
     * @returns a Decimal value representing the dynamic fee.
     */
    getDynamicFee(): Decimal;
    /**
     * The function `getEmissionRate` returns the emission rates for two rewards.
     * @returns an object of type `EmissionRate`. The object has two properties: `rewardOne` and
     * `rewardTwo`, both of which are of type `Decimal`.
     */
    getEmissionRate(): EmissionRate;
    /**
     * The function `getBinsAroundActiveBin` retrieves a specified number of bins to the left and right
     * of the active bin and returns them along with the active bin ID.
     * @param {number} numberOfBinsToTheLeft - The parameter `numberOfBinsToTheLeft` represents the
     * number of bins to the left of the active bin that you want to retrieve. It determines how many
     * bins you want to include in the result that are positioned to the left of the active bin.
     * @param {number} numberOfBinsToTheRight - The parameter `numberOfBinsToTheRight` represents the
     * number of bins to the right of the active bin that you want to retrieve.
     * @returns an object with two properties: "activeBin" and "bins". The value of "activeBin" is the
     * value of "this.lbPair.activeId", and the value of "bins" is the result of calling the "getBins"
     * function with the specified parameters.
     */
    getBinsAroundActiveBin(numberOfBinsToTheLeft: number, numberOfBinsToTheRight: number): Promise<{
        activeBin: number;
        bins: BinLiquidity[];
    }>;
    /**
     * The function `getBinsBetweenMinAndMaxPrice` retrieves a list of bins within a specified price
     * range.
     * @param {number} minPrice - The minimum price value for filtering the bins.
     * @param {number} maxPrice - The `maxPrice` parameter is the maximum price value that you want to
     * use for filtering the bins.
     * @returns an object with two properties: "activeBin" and "bins". The value of "activeBin" is the
     * active bin ID of the lbPair, and the value of "bins" is an array of BinLiquidity objects.
     */
    getBinsBetweenMinAndMaxPrice(minPrice: number, maxPrice: number): Promise<{
        activeBin: number;
        bins: BinLiquidity[];
    }>;
    /**
     * The function `getBinsBetweenLowerAndUpperBound` retrieves a list of bins between a lower and upper
     * bin ID and returns the active bin ID and the list of bins.
     * @param {number} lowerBinId - The lowerBinId parameter is a number that represents the ID of the
     * lowest bin.
     * @param {number} upperBinId - The upperBinID parameter is a number that represents the ID of the
     * highest bin.
     * @param {BinArray} [lowerBinArrays] - The `lowerBinArrays` parameter is an optional parameter of
     * type `BinArray`. It represents an array of bins that are below the lower bin ID.
     * @param {BinArray} [upperBinArrays] - The parameter `upperBinArrays` is an optional parameter of
     * type `BinArray`. It represents an array of bins that are above the upper bin ID.
     * @returns an object with two properties: "activeBin" and "bins". The value of "activeBin" is the
     * active bin ID of the lbPair, and the value of "bins" is an array of BinLiquidity objects.
     */
    getBinsBetweenLowerAndUpperBound(lowerBinId: number, upperBinId: number, lowerBinArrays?: BinArray, upperBinArrays?: BinArray): Promise<{
        activeBin: number;
        bins: BinLiquidity[];
    }>;
    /**
     * The function converts a real price of bin to a lamport value
     * @param {number} price - The `price` parameter is a number representing the price of a token.
     * @returns {string} price per Lamport of bin
     */
    toPricePerLamport(price: number): string;
    /**
     * The function converts a price per lamport value to a real price of bin
     * @param {number} pricePerLamport - The parameter `pricePerLamport` is a number representing the
     * price per lamport.
     * @returns {string} real price of bin
     */
    fromPricePerLamport(pricePerLamport: number): string;
    /**
     * The function retrieves the active bin ID and its corresponding price.
     * @returns an object with two properties: "binId" which is a number, and "price" which is a string.
     */
    getActiveBin(): Promise<BinLiquidity>;
    /**
     * The function get the price of a bin based on its bin ID.
     * @param {number} binId - The `binId` parameter is a number that represents the ID of a bin.
     * @returns {number} the calculated price of a bin based on the provided binId.
     */
    getPriceOfBinByBinId(binId: number): string;
    /**
     * The function get bin ID based on a given price and a boolean flag indicating whether to
     * round down or up.
     * @param {number} price - The price parameter is a number that represents the price value.
     * @param {boolean} min - The "min" parameter is a boolean value that determines whether to round
     * down or round up the calculated binId. If "min" is true, the binId will be rounded down (floor),
     * otherwise it will be rounded up (ceil).
     * @returns {number} which is the binId calculated based on the given price and whether the minimum
     * value should be used.
     */
    getBinIdFromPrice(price: number, min: boolean): number;
    /**
     * The function `getPositionsByUserAndLbPair` retrieves positions by user and LB pair, including
     * active bin and user positions.
     * @param {PublicKey} [userPubKey] - The `userPubKey` parameter is an optional parameter of type
     * `PublicKey`. It represents the public key of a user. If no `userPubKey` is provided, the function
     * will return an object with an empty `userPositions` array and the active bin information obtained
     * from the `getActive
     * @returns The function `getPositionsByUserAndLbPair` returns a Promise that resolves to an object
     * with two properties:
     *    - "activeBin" which is an object with two properties: "binId" and "price". The value of "binId"
     *     is the active bin ID of the lbPair, and the value of "price" is the price of the active bin.
     *   - "userPositions" which is an array of Position objects.
     */
    getPositionsByUserAndLbPair(userPubKey?: PublicKey): Promise<{
        activeBin: BinLiquidity;
        userPositions: Array<LbPosition>;
    }>;
    quoteCreatePosition({ strategy }: TQuoteCreatePositionParams): Promise<{
        binArraysCount: number;
        binArrayCost: number;
        positionCount: number;
        positionCost: number;
    }>;
    /**
     * The function `initializePositionAndAddLiquidityByStrategy` function is used to initializes a position and adds liquidity
     * @param {TInitializePositionAndAddLiquidityParamsByStrategy}
     *    - `positionPubKey`: The public key of the position account. (usually use `new Keypair()`)
     *    - `totalXAmount`: The total amount of token X to be added to the liquidity pool.
     *    - `totalYAmount`: The total amount of token Y to be added to the liquidity pool.
     *    - `strategy`: The strategy parameters to be used for the liquidity pool (Can use `calculateStrategyParameter` to calculate).
     *    - `user`: The public key of the user account.
     *    - `slippage`: The slippage percentage to be used for the liquidity pool.
     * @returns {Promise<Transaction>} The function `initializePositionAndAddLiquidityByWeight` returns a `Promise` that
     * resolves to either a single `Transaction` object.
     */
    initializePositionAndAddLiquidityByStrategy({ positionPubKey, totalXAmount, totalYAmount, strategy, user, slippage, }: TInitializePositionAndAddLiquidityParamsByStrategy): Promise<Transaction>;
    /**
     * The function `initializePositionAndAddLiquidityByWeight` function is used to initializes a position and adds liquidity
     * @param {TInitializePositionAndAddLiquidityParams}
     *    - `positionPubKey`: The public key of the position account. (usually use `new Keypair()`)
     *    - `totalXAmount`: The total amount of token X to be added to the liquidity pool.
     *    - `totalYAmount`: The total amount of token Y to be added to the liquidity pool.
     *    - `xYAmountDistribution`: An array of objects of type `XYAmountDistribution` that represents (can use `calculateSpotDistribution`, `calculateBidAskDistribution` & `calculateNormalDistribution`)
     *    - `user`: The public key of the user account.
     *    - `slippage`: The slippage percentage to be used for the liquidity pool.
     * @returns {Promise<Transaction|Transaction[]>} The function `initializePositionAndAddLiquidityByWeight` returns a `Promise` that
     * resolves to either a single `Transaction` object (if less than 26bin involved) or an array of `Transaction` objects.
     */
    initializePositionAndAddLiquidityByWeight({ positionPubKey, totalXAmount, totalYAmount, xYAmountDistribution, user, slippage, }: TInitializePositionAndAddLiquidityParams): Promise<Transaction | Transaction[]>;
    /**
     * The `addLiquidityByStrategy` function is used to add liquidity to existing position
     * @param {TInitializePositionAndAddLiquidityParamsByStrategy}
     *    - `positionPubKey`: The public key of the position account. (usually use `new Keypair()`)
     *    - `totalXAmount`: The total amount of token X to be added to the liquidity pool.
     *    - `totalYAmount`: The total amount of token Y to be added to the liquidity pool.
     *    - `strategy`: The strategy parameters to be used for the liquidity pool (Can use `calculateStrategyParameter` to calculate).
     *    - `user`: The public key of the user account.
     *    - `slippage`: The slippage percentage to be used for the liquidity pool.
     * @returns {Promise<Transaction>} The function `addLiquidityByWeight` returns a `Promise` that resolves to either a single
     * `Transaction` object
     */
    addLiquidityByStrategy({ positionPubKey, totalXAmount, totalYAmount, strategy, user, slippage, }: TInitializePositionAndAddLiquidityParamsByStrategy): Promise<Transaction>;
    /**
     * The `addLiquidityByWeight` function is used to add liquidity to existing position
     * @param {TInitializePositionAndAddLiquidityParams}
     *    - `positionPubKey`: The public key of the position account. (usually use `new Keypair()`)
     *    - `totalXAmount`: The total amount of token X to be added to the liquidity pool.
     *    - `totalYAmount`: The total amount of token Y to be added to the liquidity pool.
     *    - `xYAmountDistribution`: An array of objects of type `XYAmountDistribution` that represents (can use `calculateSpotDistribution`, `calculateBidAskDistribution` & `calculateNormalDistribution`)
     *    - `user`: The public key of the user account.
     *    - `slippage`: The slippage percentage to be used for the liquidity pool.
     * @returns {Promise<Transaction|Transaction[]>} The function `addLiquidityByWeight` returns a `Promise` that resolves to either a single
     * `Transaction` object (if less than 26bin involved) or an array of `Transaction` objects.
     */
    addLiquidityByWeight({ positionPubKey, totalXAmount, totalYAmount, xYAmountDistribution, user, slippage, }: TInitializePositionAndAddLiquidityParams): Promise<Transaction | Transaction[]>;
    /**
     * The `removeLiquidity` function is used to remove liquidity from a position,
     * with the option to claim rewards and close the position.
     * @param
     *    - `user`: The public key of the user account.
     *    - `position`: The public key of the position account.
     *    - `binIds`: An array of numbers that represent the bin IDs to remove liquidity from.
     *    - `liquiditiesBpsToRemove`: An array of numbers (percentage) that represent the liquidity to remove from each bin.
     *    - `shouldClaimAndClose`: A boolean flag that indicates whether to claim rewards and close the position.
     * @returns {Promise<Transaction|Transaction[]>}
     */
    removeLiquidity({ user, position, binIds, liquiditiesBpsToRemove, shouldClaimAndClose, }: {
        user: PublicKey;
        position: PublicKey;
        binIds: number[];
        liquiditiesBpsToRemove: BN[];
        shouldClaimAndClose?: boolean;
    }): Promise<Transaction | Transaction[]>;
    /**
     * The `closePosition` function closes a position
     * @param
     *    - `owner`: The public key of the owner of the position.
     *    - `position`: The public key of the position account.
     * @returns {Promise<Transaction>}
     */
    closePosition({ owner, position, }: {
        owner: PublicKey;
        position: LbPosition;
    }): Promise<Transaction>;
    /**
     * The `swapQuoteWithCap` function returns a quote for a swap in permission pool
     * @param
     *    - `inAmount`: Amount of lamport to swap in
     *    - `swapForY`: Swap token X to Y when it is true, else reversed.
     *    - `allowedSlipage`: Allowed slippage for the swap. Expressed in BPS. To convert from slippage percentage to BPS unit: SLIPPAGE_PERCENTAGE * 100
     *    - `maxSwappedAmount`: Max swapped amount
     * @returns {SwapQuote}
     *    - `consumedInAmount`: Amount of lamport to swap in
     *    - `outAmount`: Amount of lamport to swap out
     *    - `fee`: Fee amount
     *    - `protocolFee`: Protocol fee amount
     *    - `minOutAmount`: Minimum amount of lamport to swap out
     *    - `priceImpact`: Price impact of the swap
     *    - `binArraysPubkey`: Array of bin arrays involved in the swap
     */
    swapQuoteWithCap(inAmount: BN, swapForY: boolean, allowedSlippage: BN, maxSwappedAmount: BN, binArrays: BinArrayAccount[]): SwapQuote;
    /**
     * The `swapQuote` function returns a quote for a swap
     * @param
     *    - `inAmount`: Amount of lamport to swap in
     *    - `swapForY`: Swap token X to Y when it is true, else reversed.
     *    - `allowedSlipage`: Allowed slippage for the swap. Expressed in BPS. To convert from slippage percentage to BPS unit: SLIPPAGE_PERCENTAGE * 100
     * @returns {SwapQuote}
     *    - `consumedInAmount`: Amount of lamport to swap in
     *    - `outAmount`: Amount of lamport to swap out
     *    - `fee`: Fee amount
     *    - `protocolFee`: Protocol fee amount
     *    - `minOutAmount`: Minimum amount of lamport to swap out
     *    - `priceImpact`: Price impact of the swap
     *    - `binArraysPubkey`: Array of bin arrays involved in the swap
     */
    swapQuote(inAmount: BN, swapForY: boolean, allowedSlippage: BN, binArrays: BinArrayAccount[]): SwapQuote;
    /**
     * Returns a transaction to be signed and sent by user performing swap.
     * @param {SwapParams}
     *    - `inToken`: The public key of the token to be swapped in.
     *    - `outToken`: The public key of the token to be swapped out.
     *    - `inAmount`: The amount of token to be swapped in.
     *    - `minOutAmount`: The minimum amount of token to be swapped out.
     *    - `lbPair`: The public key of the liquidity pool.
     *    - `user`: The public key of the user account.
     *    - `binArraysPubkey`: Array of bin arrays involved in the swap
     * @returns {Promise<Transaction>}
     */
    swap({ inToken, outToken, inAmount, minOutAmount, lbPair, user, binArraysPubkey, }: SwapParams): Promise<Transaction>;
    /**
     * The claimLMReward function is used to claim rewards for a specific position owned by a specific owner.
     * @param
     *    - `owner`: The public key of the owner of the position.
     *    - `position`: The public key of the position account.
     * @returns {Promise<Transaction>}
     */
    claimLMReward({ owner, position, }: {
        owner: PublicKey;
        position: LbPosition;
    }): Promise<Transaction>;
    /**
     * The `claimAllLMRewards` function is used to claim all liquidity mining rewards for a given owner
     * and their positions.
     * @param
     *    - `owner`: The public key of the owner of the positions.
     *    - `positions`: An array of objects of type `PositionData` that represents the positions to claim rewards from.
     * @returns {Promise<Transaction[]>}
     */
    claimAllLMRewards({ owner, positions, }: {
        owner: PublicKey;
        positions: LbPosition[];
    }): Promise<Transaction[]>;
    /**
     * The function `claimSwapFee` is used to claim swap fees for a specific position owned by a specific owner.
     * @param
     *    - `owner`: The public key of the owner of the position.
     *    - `position`: The public key of the position account.
     * @returns {Promise<Transaction>}
     */
    claimSwapFee({ owner, position, }: {
        owner: PublicKey;
        position: LbPosition;
    }): Promise<Transaction>;
    /**
     * The `claimAllSwapFee` function to claim swap fees for multiple positions owned by a specific owner.
     * @param
     *    - `owner`: The public key of the owner of the positions.
     *    - `positions`: An array of objects of type `PositionData` that represents the positions to claim swap fees from.
     * @returns {Promise<Transaction[]>}
     */
    claimAllSwapFee({ owner, positions, }: {
        owner: PublicKey;
        positions: LbPosition[];
    }): Promise<Transaction[]>;
    /**
     * The function `claimAllRewardsByPosition` allows a user to claim all rewards for a specific
     * position.
     * @param
     *    - `owner`: The public key of the owner of the position.
     *    - `position`: The public key of the position account.
     * @returns {Promise<Transaction[]>}
     */
    claimAllRewardsByPosition({ owner, position, }: {
        owner: PublicKey;
        position: LbPosition;
    }): Promise<Transaction[]>;
    /**
     * The `claimAllRewards` function to claim swap fees and LM rewards for multiple positions owned by a specific owner.
     * @param
     *    - `owner`: The public key of the owner of the positions.
     *    - `positions`: An array of objects of type `PositionData` that represents the positions to claim swap fees and LM rewards from.
     * @returns {Promise<Transaction[]>}
     */
    claimAllRewards({ owner, positions, }: {
        owner: PublicKey;
        positions: LbPosition[];
    }): Promise<Transaction[]>;
    /** Private static method */
    private static getBinArrays;
    private static getClaimableLMReward;
    private static getClaimableSwapFee;
    private static processPosition;
    private static getBinsBetweenLowerAndUpperBound;
    private static getPriceOfBinByBinId;
    /** Private method */
    private processXYAmountDistribution;
    private getBins;
    private binArraysToBeCreate;
    private createBinArraysIfNeeded;
    private updateVolatilityAccumulator;
    private updateReference;
    private createClaimBuildMethod;
    private createClaimSwapFeeMethod;
}

/** private */
declare function derivePresetParameter(binStep: BN, programId: PublicKey): [PublicKey, number];
declare function deriveLbPair(tokenX: PublicKey, tokenY: PublicKey, binStep: BN, programId: PublicKey): [PublicKey, number];
declare function deriveOracle(lbPair: PublicKey, programId: PublicKey): [PublicKey, number];
declare function derivePosition(mint: PublicKey, programId: PublicKey): [PublicKey, number];
declare function deriveBinArray(lbPair: PublicKey, index: BN, programId: PublicKey): [PublicKey, number];
declare function deriveReserve(token: PublicKey, lbPair: PublicKey, programId: PublicKey): [PublicKey, number];

/** private */
declare function isOverflowDefaultBinArrayBitmap(binArrayIndex: BN): boolean;
declare function deriveBinArrayBitmapExtension(lbPair: PublicKey, programId: PublicKey): [PublicKey, number];
declare function binIdToBinArrayIndex(binId: BN): BN;
declare function getBinArrayLowerUpperBinId(binArrayIndex: BN): BN[];
declare function isBinIdWithinBinArray(activeId: BN, binArrayIndex: BN): boolean;
declare function getBinFromBinArray(binId: number, binArray: BinArray): Bin;
declare function findNextBinArrayIndexWithLiquidity(swapForY: boolean, activeId: BN, lbPairState: LbPair, binArrayBitmapExtension: BinArrayBitmapExtension | null): BN | null;
declare function findNextBinArrayWithLiquidity(swapForY: boolean, activeBinId: BN, lbPairState: LbPair, binArrayBitmapExtension: BinArrayBitmapExtension, binArrays: BinArrayAccount[]): BinArrayAccount | null;

declare function getPriceOfBinByBinId(binId: number, binStep: number): Decimal;
/** private */
declare function toWeightDistribution(amountX: BN, amountY: BN, distributions: {
    binId: number;
    xAmountBpsOfTotal: BN;
    yAmountBpsOfTotal: BN;
}[], binStep: number): {
    binId: number;
    weight: number;
}[];
declare function calculateSpotDistribution(activeBin: number, binIds: number[]): {
    binId: number;
    xAmountBpsOfTotal: BN;
    yAmountBpsOfTotal: BN;
}[];
declare function calculateBidAskDistribution(activeBin: number, binIds: number[]): {
    binId: number;
    xAmountBpsOfTotal: BN;
    yAmountBpsOfTotal: BN;
}[];
declare function calculateNormalDistribution(activeBin: number, binIds: number[]): {
    binId: number;
    xAmountBpsOfTotal: BN;
    yAmountBpsOfTotal: BN;
}[];
declare function fromWeightDistributionToAmountOneSide(amount: BN, distributions: {
    binId: number;
    weight: number;
}[], binStep: number, activeId: number, depositForY: boolean): {
    binId: number;
    amount: BN;
}[];
declare function fromWeightDistributionToAmount(amountX: BN, amountY: BN, distributions: {
    binId: number;
    weight: number;
}[], binStep: number, activeId: number, amountXInActiveBin: BN, amountYInActiveBin: BN): {
    binId: number;
    amountX: BN;
    amountY: BN;
}[];

declare function getBaseFee(binStep: number, sParameter: sParameters): BN;
declare function getVariableFee(binStep: number, sParameter: sParameters, vParameter: vParameters): BN;
declare function getTotalFee(binStep: number, sParameter: sParameters, vParameter: vParameters): BN;
declare function computeFee(binStep: number, sParameter: sParameters, vParameter: vParameters, inAmount: BN): BN;
declare function computeFeeFromAmount(binStep: number, sParameter: sParameters, vParameter: vParameters, inAmountWithFees: BN): BN;
declare function computeProtocolFee(feeAmount: BN, sParameter: sParameters): BN;
declare function swapQuoteAtBinWithCap(bin: Bin, binStep: number, sParameter: sParameters, vParameter: vParameters, inAmount: BN, swapForY: boolean, remainingCap: BN): {
    isReachCap: boolean;
    amountIn: BN;
    amountOut: BN;
    fee: BN;
    protocolFee: BN;
};
declare function swapQuoteAtBin(bin: Bin, binStep: number, sParameter: sParameters, vParameter: vParameters, inAmount: BN, swapForY: boolean): {
    amountIn: BN;
    amountOut: BN;
    fee: BN;
    protocolFee: BN;
};

declare function toAmountBidSide(activeId: number, totalAmount: BN, distributions: {
    binId: number;
    weight: number;
}[]): {
    binId: number;
    amount: BN;
}[];
declare function toAmountAskSide(activeId: number, binStep: number, totalAmount: BN, distributions: {
    binId: number;
    weight: number;
}[]): {
    binId: number;
    amount: BN;
}[];
declare function toAmountBothSide(activeId: number, binStep: number, amountX: BN, amountY: BN, amountXInActiveBin: BN, amountYInActiveBin: BN, distributions: {
    binId: number;
    weight: number;
}[]): {
    binId: number;
    amountX: BN;
    amountY: BN;
}[];
declare function autoFillYByWeight(activeId: number, binStep: number, amountX: BN, amountXInActiveBin: BN, amountYInActiveBin: BN, distributions: {
    binId: number;
    weight: number;
}[]): BN;
declare function autoFillXByWeight(activeId: number, binStep: number, amountY: BN, amountXInActiveBin: BN, amountYInActiveBin: BN, distributions: {
    binId: number;
    weight: number;
}[]): BN;

declare function toAmountsOneSideByStrategy(activeId: number, binStep: number, minBinId: number, maxBinId: number, amount: BN, strategyType: StrategyType, depositForY: boolean): {
    binId: number;
    amount: BN;
}[];
declare function toAmountsBothSideByStrategy(activeId: number, binStep: number, minBinId: number, maxBinId: number, amountX: BN, amountY: BN, amountXInActiveBin: BN, amountYInActiveBin: BN, strategyType: StrategyType): {
    binId: number;
    amountX: BN;
    amountY: BN;
}[];
declare function autoFillYByStrategy(activeId: number, binStep: number, amountX: BN, amountXInActiveBin: BN, amountYInActiveBin: BN, minBinId: number, maxBinId: number, strategyType: StrategyType): BN;
declare function autoFillXByStrategy(activeId: number, binStep: number, amountY: BN, amountXInActiveBin: BN, amountYInActiveBin: BN, minBinId: number, maxBinId: number, strategyType: StrategyType): BN;
declare function toStrategyParameters(strategyParameters: StrategyParameters): {
    minBinId: number;
    maxBinId: number;
    strategyType: {
        spotOneSide: {};
        curveOneSide?: undefined;
        bidAskOneSide?: undefined;
        spotBalanced?: undefined;
        curveBalanced?: undefined;
        bidAskBalanced?: undefined;
        spotImBalanced?: undefined;
        curveImBalanced?: undefined;
        bidAskImBalanced?: undefined;
    };
    parameteres: number[];
} | {
    minBinId: number;
    maxBinId: number;
    strategyType: {
        curveOneSide: {};
        spotOneSide?: undefined;
        bidAskOneSide?: undefined;
        spotBalanced?: undefined;
        curveBalanced?: undefined;
        bidAskBalanced?: undefined;
        spotImBalanced?: undefined;
        curveImBalanced?: undefined;
        bidAskImBalanced?: undefined;
    };
    parameteres: number[];
} | {
    minBinId: number;
    maxBinId: number;
    strategyType: {
        bidAskOneSide: {};
        spotOneSide?: undefined;
        curveOneSide?: undefined;
        spotBalanced?: undefined;
        curveBalanced?: undefined;
        bidAskBalanced?: undefined;
        spotImBalanced?: undefined;
        curveImBalanced?: undefined;
        bidAskImBalanced?: undefined;
    };
    parameteres: number[];
} | {
    minBinId: number;
    maxBinId: number;
    strategyType: {
        spotBalanced: {};
        spotOneSide?: undefined;
        curveOneSide?: undefined;
        bidAskOneSide?: undefined;
        curveBalanced?: undefined;
        bidAskBalanced?: undefined;
        spotImBalanced?: undefined;
        curveImBalanced?: undefined;
        bidAskImBalanced?: undefined;
    };
    parameteres: number[];
} | {
    minBinId: number;
    maxBinId: number;
    strategyType: {
        curveBalanced: {};
        spotOneSide?: undefined;
        curveOneSide?: undefined;
        bidAskOneSide?: undefined;
        spotBalanced?: undefined;
        bidAskBalanced?: undefined;
        spotImBalanced?: undefined;
        curveImBalanced?: undefined;
        bidAskImBalanced?: undefined;
    };
    parameteres: number[];
} | {
    minBinId: number;
    maxBinId: number;
    strategyType: {
        bidAskBalanced: {};
        spotOneSide?: undefined;
        curveOneSide?: undefined;
        bidAskOneSide?: undefined;
        spotBalanced?: undefined;
        curveBalanced?: undefined;
        spotImBalanced?: undefined;
        curveImBalanced?: undefined;
        bidAskImBalanced?: undefined;
    };
    parameteres: number[];
} | {
    minBinId: number;
    maxBinId: number;
    strategyType: {
        spotImBalanced: {};
        spotOneSide?: undefined;
        curveOneSide?: undefined;
        bidAskOneSide?: undefined;
        spotBalanced?: undefined;
        curveBalanced?: undefined;
        bidAskBalanced?: undefined;
        curveImBalanced?: undefined;
        bidAskImBalanced?: undefined;
    };
    parameteres: number[];
} | {
    minBinId: number;
    maxBinId: number;
    strategyType: {
        curveImBalanced: {};
        spotOneSide?: undefined;
        curveOneSide?: undefined;
        bidAskOneSide?: undefined;
        spotBalanced?: undefined;
        curveBalanced?: undefined;
        bidAskBalanced?: undefined;
        spotImBalanced?: undefined;
        bidAskImBalanced?: undefined;
    };
    parameteres: number[];
} | {
    minBinId: number;
    maxBinId: number;
    strategyType: {
        bidAskImBalanced: {};
        spotOneSide?: undefined;
        curveOneSide?: undefined;
        bidAskOneSide?: undefined;
        spotBalanced?: undefined;
        curveBalanced?: undefined;
        bidAskBalanced?: undefined;
        spotImBalanced?: undefined;
        curveImBalanced?: undefined;
    };
    parameteres: number[];
};

declare function chunks<T>(array: T[], size: number): T[][];
declare function chunkedFetchMultiplePoolAccount(program: ClmmProgram, pks: PublicKey[], chunkSize?: number): Promise<{
    parameters: {
        baseFactor: number;
        filterPeriod: number;
        decayPeriod: number;
        reductionFactor: number;
        variableFeeControl: number;
        maxVolatilityAccumulator: number;
        minBinId: number;
        maxBinId: number;
        protocolShare: number;
        padding: number[];
    };
    vParameters: {
        volatilityAccumulator: number;
        volatilityReference: number;
        indexReference: number;
        padding: number[];
        lastUpdateTimestamp: BN;
        padding1: number[];
    };
    bumpSeed: number[];
    binStepSeed: number[];
    pairType: number;
    activeId: number;
    binStep: number;
    status: number;
    padding1: number[];
    tokenXMint: PublicKey;
    tokenYMint: PublicKey;
    reserveX: PublicKey;
    reserveY: PublicKey;
    protocolFee: {
        amountX: BN;
        amountY: BN;
    };
    feeOwner: PublicKey;
    rewardInfos: {
        mint: PublicKey;
        vault: PublicKey;
        funder: PublicKey;
        rewardDuration: BN;
        rewardDurationEnd: BN;
        rewardRate: BN;
        lastUpdateTime: BN;
        cumulativeSecondsWithEmptyLiquidityReward: BN;
    }[];
    oracle: PublicKey;
    binArrayBitmap: BN[];
    lastUpdatedAt: BN;
    whitelistedWallet: PublicKey[];
    baseKey: PublicKey;
    activationSlot: BN;
    swapCapDeactivateSlot: BN;
    maxSwappedAmount: BN;
    reserved: number[];
}[]>;
declare function chunkedFetchMultipleBinArrayBitmapExtensionAccount(program: ClmmProgram, pks: PublicKey[], chunkSize?: number): Promise<{
    lbPair: PublicKey;
    positiveBinArrayBitmap: BN[][];
    negativeBinArrayBitmap: BN[][];
}[]>;
declare function getOutAmount(bin: Bin, inAmount: BN, swapForY: boolean): BN;
declare function getTokenDecimals(conn: Connection, mint: PublicKey): Promise<number>;
declare const getOrCreateATAInstruction: (connection: Connection, tokenMint: PublicKey, owner: PublicKey, payer?: PublicKey, allowOwnerOffCurve?: boolean) => Promise<GetOrCreateATAResponse>;
declare function getTokenBalance(conn: Connection, tokenAccount: PublicKey): Promise<bigint>;
declare const parseLogs: <T>(eventParser: EventParser, logs: string[]) => T;
declare const wrapSOLInstruction: (from: PublicKey, to: PublicKey, amount: bigint) => TransactionInstruction[];
declare const unwrapSOLInstruction: (owner: PublicKey, allowOwnerOffCurve?: boolean) => Promise<TransactionInstruction>;
declare function chunkedGetMultipleAccountInfos(connection: Connection, pks: PublicKey[], chunkSize?: number): Promise<_solana_web3_js.AccountInfo<Buffer>[]>;
declare const computeBudgetIx: () => TransactionInstruction;

type Codes = (typeof IDL.errors)[number]["code"];
declare class DLMMError extends Error {
    errorCode: number;
    errorName: string;
    errorMessage: string;
    constructor(error: object | Codes);
}

declare const LBCLMM_PROGRAM_IDS: {
    devnet: string;
    localhost: string;
    "mainnet-beta": string;
};
declare const ADMIN: {
    devnet: string;
    localhost: string;
};
declare enum Network {
    MAINNET = "mainnet-beta",
    TESTNET = "testnet",
    DEVNET = "devnet",
    LOCAL = "localhost"
}
declare const BASIS_POINT_MAX = 10000;
declare const SCALE_OFFSET = 64;
declare const SCALE: BN;
declare const FEE_PRECISION: BN;
declare const MAX_FEE_RATE: BN;
declare const BIN_ARRAY_FEE = 0.07054656;
declare const POSITION_FEE = 0.0565152;
declare const MAX_BIN_ARRAY_SIZE: BN;
declare const MAX_BIN_PER_POSITION: BN;
declare const BIN_ARRAY_BITMAP_SIZE: BN;
declare const EXTENSION_BINARRAY_BITMAP_SIZE: BN;
declare const SIMULATION_USER: PublicKey;
declare const PRECISION = 18446744073709552000;
declare const MAX_CLAIM_ALL_ALLOWED = 3;
declare const MAX_BIN_LENGTH_ALLOWED_IN_ONE_TX = 26;
declare const MAX_BIN_PER_TX = 69;
declare const MAX_ACTIVE_BIN_SLIPPAGE = 3;

export { ADMIN, BASIS_POINT_MAX, BIN_ARRAY_BITMAP_SIZE, BIN_ARRAY_FEE, Bin, BinAndAmount, BinArray, BinArrayAccount, BinArrayBitmapExtension, BinArrayBitmapExtensionAccount, BinLiquidity, BinLiquidityDistribution, BinLiquidityReduction, BitmapType, ClmmProgram, DLMMError, EXTENSION_BINARRAY_BITMAP_SIZE, EmissionRate, FEE_PRECISION, FeeInfo, GetOrCreateATAResponse, IAccountsCache, IDL, LBCLMM_PROGRAM_IDS, LMRewards, LbClmm, LbPair, LbPairAccount, LbPosition, LiquidityOneSideParameter, LiquidityParameterByStrategy, LiquidityParameterByStrategyOneSide, LiquidityParameterByWeight, MAX_ACTIVE_BIN_SLIPPAGE, MAX_BIN_ARRAY_SIZE, MAX_BIN_LENGTH_ALLOWED_IN_ONE_TX, MAX_BIN_PER_POSITION, MAX_BIN_PER_TX, MAX_CLAIM_ALL_ALLOWED, MAX_FEE_RATE, Network, POSITION_FEE, PRECISION, Position, PositionBinData, PositionData, PositionInfo, PositionVersion, ProgramStrategyParameter, ProgramStrategyType, SCALE, SCALE_OFFSET, SIMULATION_USER, Strategy, StrategyParameters, StrategyType, SwapFee, SwapParams, SwapQuote, TInitializePositionAndAddLiquidityParams, TInitializePositionAndAddLiquidityParamsByStrategy, TQuoteCreatePositionParams, TokenReserve, autoFillXByStrategy, autoFillXByWeight, autoFillYByStrategy, autoFillYByWeight, binIdToBinArrayIndex, calculateBidAskDistribution, calculateNormalDistribution, calculateSpotDistribution, chunkedFetchMultipleBinArrayBitmapExtensionAccount, chunkedFetchMultiplePoolAccount, chunkedGetMultipleAccountInfos, chunks, computeBudgetIx, computeFee, computeFeeFromAmount, computeProtocolFee, DLMM as default, deriveBinArray, deriveBinArrayBitmapExtension, deriveLbPair, deriveOracle, derivePosition, derivePresetParameter, deriveReserve, findNextBinArrayIndexWithLiquidity, findNextBinArrayWithLiquidity, fromWeightDistributionToAmount, fromWeightDistributionToAmountOneSide, getBaseFee, getBinArrayLowerUpperBinId, getBinFromBinArray, getOrCreateATAInstruction, getOutAmount, getPriceOfBinByBinId, getTokenBalance, getTokenDecimals, getTotalFee, getVariableFee, isBinIdWithinBinArray, isOverflowDefaultBinArrayBitmap, parseLogs, sParameters, swapQuoteAtBin, swapQuoteAtBinWithCap, toAmountAskSide, toAmountBidSide, toAmountBothSide, toAmountsBothSideByStrategy, toAmountsOneSideByStrategy, toStrategyParameters, toWeightDistribution, unwrapSOLInstruction, vParameters, wrapSOLInstruction };
