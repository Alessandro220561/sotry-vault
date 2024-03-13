"""create new books table

Revision ID: 8d99455dd155
Revises: 119ac6dbacc3
Create Date: 2024-03-13 19:43:40.952181

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8d99455dd155'
down_revision = '119ac6dbacc3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('books',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('author', sa.String(), nullable=True),
    sa.Column('genre', sa.String(), nullable=True),
    sa.Column('pages', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_books'))
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('books')
    # ### end Alembic commands ###
