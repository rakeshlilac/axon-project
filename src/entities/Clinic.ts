import { Organisation } from './Organisation';
import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	
    BaseEntity,
    PrimaryGeneratedColumn,
	
} from 'typeorm';


@Entity('clinic')
export class Clinic extends BaseEntity {

    @PrimaryGeneratedColumn()
	id: number;

	@Column({
		
		nullable:false
	})
	site_name: string;
    @Column({
		
		nullable:false
	})
	business_name: string;

    @Column({
		type: 'numeric',
		nullable:false
	})
	abn_number: number;

    @Column({
		
		nullable:false
	})
	minor_id: string;

    @Column({
		
		nullable:false
	})
	address_1: string;

    @Column({
		
		nullable:false
	})
	address_2: string;
    @Column({
		
		nullable:false
	})
	suburb: string;

	@Column({
		
		nullable:false
	})
	organisation: number;


	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
	
}