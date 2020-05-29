#include <stdio.h>
#include<stdlib.h>
#include<string.h>

// dado um vetor 0 1 2 3 (k=4 e fat=24)

/*
Lógica:

  0 1 2 3   -> 4x3x2x1
  
  1a pos: 6xcada num (24/4) -> freq <-
  2a pos: 2xcada num (24/(4*3)) -> freq <- 
  3a pos: 1x cada num (24/(4*3*2)) -> freq <- 
  4a pos: 1x cada num (24?(4*3*2*1)) -> freq <- 
  
  6 2 1 1
  
  0 1 2 3
  0 1 3
  0 2 
  0 2
  0 3
  0 3
  1 
  1
  1
  1
  1
  1
  2
  2
  2
  2
  2
  2
  3
  3
  3
  3
  3
  3
  */
//current = linha atual   col = coluna atual

//calcula fatorial
int fatorial(int k){
	int cnt = k-1;

	while(cnt>1){
		k=k*cnt;
		cnt--;
	}
	return k;
}

void print_matrix(int**m, int k, int fat){
	for(int i=0; i<fat;i++){
		for(int j=0; j<k; j++){
			printf("%d ", m[i][j]);
		}
		printf("\n");
	}
	//printf("\n\n");
}

void permut(int** m, int k, int fat, int current, int col){

	//copia vetor pra usar como base
	int* vet = (int*)calloc(k, sizeof(int));
	for(int i=0;i<k;i++) vet[i] = i+1;

	int aux = 0;
	int freq = fat;

	//calcula frequencia com que o numero vai aparecer nessa iteração (nessa iteração = nessa chamada da funçao permut)
	while(aux<=col){
		freq = freq/(k-aux);
		aux++;
	}
	//printf("freq = %d\n", freq);

	// invalida numeros que ja estão na linha atual com -1
	for(int i=0;i<k;i++){
		for(int j=0; j<k; j++){
			if(m[current][i] == vet[j]) vet[j] = -1;
		}
	}

	int cnt = 0, j = 0;

	//enquanto nem todos os numeros forem colocados, coloque freq vezes eles na matriz
	while(cnt<=freq && j<k){
		//print_matrix(m, k ,fat);
		//printf("current = %d cnt = %d, j=%d\n", current, cnt, j);
		if(vet[j]!=-1){
			m[current][col] = vet[j];
			current++;
			cnt++;
		}
		else j++;
	
		if(cnt==freq){ // troca depois de freq vezes que o numero foi colocado
			j++;
			cnt=0;
		} 
	}

	free(vet);

	if(current == fat && col<k){
		if(col+1 < k) permut(m, k, fat, 0, col+1);	
	} 
	else if(col < k) permut(m, k, fat, current, col);

	return;
}

int main(){

	int k;
	scanf("%d", &k);

	int fat = fatorial(k);

	int** m = (int**)calloc(fat, sizeof(int*));
	for(int i=0; i<fat; i++) m[i] = (int*)calloc(k, sizeof(int));

	permut(m, k, fat, 0, 0);

	print_matrix(m, k, fat);

	for(int i=0; i<fat; i++) free(m[i]);
	free(m);

	return 0;
}

