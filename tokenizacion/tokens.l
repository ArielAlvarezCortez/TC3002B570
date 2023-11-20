%option noyywrap
%{
#include <stdio.h>
%}
%%

auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while printf("keyword ");

[a-zA-Z_][a-zA-Z_0-9]* printf("identifier ");

\+=|-=|\*=|\/=|%=|<<=|>>=|&=|\^=|\|=|= printf("Assignment ");

\+\+|--|\+|-|\*|\/|% printf("Arithmetic ");

==|>=|<=|!=|>|< printf("Relational ");

&&|\|\||! printf("Logical ");

\||&|\^|~|<<|>> printf("Bitwise ");

\? printf("Ternary ");

[\[\](){},#*~.] printf("Special ");

"[ -~]+" printf("String ");

[0-9]*.[0-9]+ printf("Float ");

[0-9]+ printf("Integer ");

'[ -~]+' printf("Char ");

\/\/[ -~]*              /* comentario */;
[ \t]+                  /* espacio */;
%%

int main(int argc, char *argv[])
{
    yyin = fopen(argv[1], "r");
    yylex();
    fclose(yyin);
}