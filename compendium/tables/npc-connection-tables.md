---
aliases: ['npc-connection-tables']
---
# npc-connection-tables
## Connections

| dice: 1d4 | Connections                                                       | 
| --------- | ----------------------------------------------------------------- |
| 1         | `dice: [[npc-connection-tables#^connections-incoming]]`            |
| 2         | `dice: [[npc-connection-tables#^connections-outgoing]]`            |
| 3         | `dice: [[npc-connection-tables#^connections-incoming]]` *(secret)* |
| 4         | `dice: [[npc-connection-tables#^connections-outgoing]]` *(secret)* |
^connections

| dice: 1d5 | Connections-incoming                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1         | `dice: #npc\|link` helps, aids, or works for them                                                                          |
| 2         | `dice: #npc\|link` is out to get them                                                                                      |
| 3         | `dice: [[npc-connection-tables#^connection-npc-or-faction]]` owes them some `dice: [[npc-connection-tables#^connections-importance]]` debt |
| 4         | `dice: #npc\|link` is from their past `dice: [[npc-connection-tables#^connections-opinion]]`                                     |
| 5         | `dice: [[npc-connection-tables#^connection-npc-or-faction]]` is obstructing their goals (knowingly or unknowingly)                                                   |
^connections-incoming

| dice: 1d9 | Connections-outgoing                                                                                                          |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 1         | Helps, Aids, or works for `dice: #npc\|link`                                                                              |
| 2         | They are out to get `dice: #npc\|link`                                                                                    |
| 3         | They owe `dice: [[npc-connection-tables#^connection-npc-or-faction]]` some `dice: [[npc-connection-tables#^connections-importance]]` debt |
| 4         | They are obstructing `dice: [[npc-connection-tables#^connection-npc-or-faction]]`'s goals (knowingly or unknowingly)                |
| 5         | They're from `dice: #pc\|link`'s past `dice: [[npc-connection-tables#^connections-opinion]]`                                    |
| 6         | They know of `dice: #pc\|link` from rumors `dice: [[npc-connection-tables#^connections-rumors]]`, `dice: [[npc-connection-tables#^connections-opinion]]`    |
| 7         | They know of `dice: #npc\|link` from rumors `dice: [[npc-connection-tables#^connections-rumors]]`, `dice: [[npc-connection-tables#^connections-opinion]]`   |
| 8         | They are associated with `dice: #type/faction\|link`                                                                          |
| 9        | They used to be associated with `dice: #type/faction\|link`                                                                   |
^connections-outgoing

| dice: 1d7 | Connections-opinion                                              |
| --------- | ---------------------------------------------------------------- |
| 1         | and they are out to get them                                     |
| 2         | and they admire them                                             |
| 3         | and they fear them                                               |
| 4         | and they hate them                                               |
| 5         | and they wish to get closer to them                              |
| 6         | and they personally considers themselves an old friend of theirs |
| 7         | and they remind them of someone dear to them.                    |
^connections-opinion

| dice: 1d7 | connections-importance |
| --------- | ---------------------- |
| 1         | piddling               |
| 2         | minor                  |
| 3         | moderate               |
| 4         | considerable           |
| 5         | major                  |
| 6         | great                  |
| 7         | impossible             |
^connections-importance

| dice: 1d2 | connections-rumors |
| --------- | ------------------ |
| 1         | with truth to them |
| 2         | full of lies       |
^connections-rumors

| dice: 1d2 | npc or faction               |
| --------- | ---------------------------- |
| 1         | `dice: #npc\|link`           |
| 2         | `dice: #type/faction\|link` |
^connection-npc-or-faction