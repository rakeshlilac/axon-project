import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
    PrimaryGeneratedColumn
} from 'typeorm';

import { Person } from './utils/Person';
import { Organisation } from './Organisation';

@Entity('user')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;
	@Column({
	
		nullable:true
	})
	user_name: string;

    @Column({
		
		nullable:true
	})
	first_name: string;
    @Column({
		
		nullable:true
	})
	last_name: string;

    @Column({
	
		nullable:true
	})
	password: string;

    @Column({
		
		nullable:true
	})
	work_email: string;

	@Column({
		
		nullable:true
	})
	organisation: string;

	@Column({
		
		nullable:true
	})
	clinic: string;


	@Column({
		name: 'active',
		default: true,
	})
	is_active: boolean;
	@Column({
		name: 'complete',
		default: false,
	})
	is_complete: boolean;

	@Column({
		name: 'superadmin',
		default: false,
	})
	is_superadmin: boolean;

	@Column({
		name: 'organisationadmin',
		default: false,
	})
	is_organisation_admin: boolean;
	
	@Column({
		name: 'clinicadmin',
		default: false,
	})
	is_clinic_admin: boolean;
	

    

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
	
}